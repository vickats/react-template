import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Box,
  Grid,
  Link,
  Avatar,
  Button,
  Modal,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  Autocomplete,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
import { styled } from '@mui/material/styles';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';
// section
import TrackingHead from '../sections/@dashboard/tracking/TrackingHead';
import TrackingToolbar from '../sections/@dashboard/tracking/TrackingToolbar';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// mock
import STORAGELIST from '../_mock/storage';
// APIs
import apiGitHub from '../services/apiGitHub';
import apiSwapi from '../services/apiSwapi';



// ----------------------------------------------------------------------
// refactor i18next
const TABLE_HEAD = [
  { id: 'storage', label: i18next.t('page.tracking.table.head.storage'), alignRight: false },
  { id: 'subsidiary', label: i18next.t('page.tracking.table.head.subsidiary'), alignRight: false },
  { id: 'status', label: i18next.t('page.tracking.table.head.status'), alignRight: false },
  { id: 'nf', label: i18next.t('page.tracking.table.head.nf'), alignRight: false },
  { id: 'isVerified', label: i18next.t('page.tracking.table.head.deliveryVerification'), alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.storage.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

//---------------------------------------------------------------
export default function TrackingPage() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(null);

  const [openFile, setOpenFile] = useState(false);

  const [openConfirm, setOpenConfirm] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('storage');

  const [filterName, setFilterName] = useState('');

  const [filterStatus, setFilterStatus] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true)
  };
  const handleCloseDelete = () => {
    setOpenDelete(false)
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleOpenFile = () => {
    setOpenFile(true);
  };
  const handleCloseFile = () => {
    setOpenFile(false);
  };
  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = STORAGELIST.map((n) => n.storage);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, storage) => {
    const selectedIndex = selected.indexOf(storage);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, storage);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterByStatus = (event) => {
    setPage(0);
    setFilterStatus(event.target.value);
  };

  

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - STORAGELIST.length) : 0;

  const filteredUsers = applySortFilter(STORAGELIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 12,
    borderRadius: 2,
    pt: 2,
    px: 4,
    pb: 3,
  };

  /* Axios - HTTP client
   * Usando o Ajax como uma camada abaixo, faz requisições através do browser via XMLHttpRequests;
   * Faz requisições HTTP com o Node.js;
   * Suporta a Promises;Todas as respostas são transformadas e retornadas em JSON;
   * Tem suporte a falsificação de solicitações entre sites, conhecido como XRSF.
   */
  const [user, setUser] = useState();
  const [jedi, setJedi] = useState();
  // GET
  useEffect(() => {
    apiGitHub
      .get('/users/romulo27')
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro: ${err}`);
      });
  }, []);

  useEffect(() => {
    apiSwapi
      .get('/people/1')
      .then((response) => setJedi(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro: ${err}`);
      });
  }, []);

  // POST
  useEffect(() => {
    apiGitHub
      .post('https://minhaapi/novo-usuario', {
        nome: 'Romulo',
        sobrenome: 'Sousa',
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro: ${err}`);
      });
  }, []);

  // Confirm Child Modal
  function ConfirmChildModal() {
    const [openConfirmChild, setOpenConfirmChild] = useState(false);

    const handleOpenConfirmChild = () => {
      setOpenConfirmChild(true);
    };
    const handleCloseConfirmChild = () => {
      setOpenConfirmChild(false);
    };

    return (
      <>
        <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
          <Button variant="contained" color="success" onClick={handleOpenConfirmChild}>
          {t('page.tracking.table.modal.confirm.btn.confirm')}
          </Button>
          <Button variant="outlined" onClick={handleCloseConfirm}>
          {t('page.tracking.table.modal.confirm.btn.close')}
          </Button>
        </Stack>
        <Modal
          open={openConfirmChild}
          onClose={handleCloseConfirmChild}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 400 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <g id="evaCheckmarkCircle2Fill0">
                  <g id="evaCheckmarkCircle2Fill1">
                    <path
                      id="evaCheckmarkCircle2Fill2"
                      fill="#229a16"
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"
                    />
                  </g>
                </g>
              </svg>
              <h2 id="child-modal-title">{t('page.tracking.table.modal.confirm.success.title')}</h2>
            </Stack>
            <p id="child-modal-description" style={{whiteSpace:'pre-line'}}>
            {t('page.tracking.table.modal.confirm.success.text')}{' '}
            </p>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button onClick={handleCloseConfirm} variant="outlined">
              {t('page.tracking.table.modal.confirm.success.btn.close')}
              </Button>
            </Stack>
          </Box>
        </Modal>
      </>
    );
  }

  // Confirm Delete Modal
  function ConfirmDeleteModal() {
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

    const handleOpenConfirmDelete = () => {
      setOpenConfirmDelete(true);
    };
    const handleCloseConfirmDelete = () => {
      setOpenConfirmDelete(false);
    };

    return (
      <>
        <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
          <Button variant="contained" color="success" onClick={handleOpenConfirmDelete}>
          {t('page.tracking.table.modal.delete.btn.confirm')}
          </Button>
          <Button variant="outlined" onClick={handleCloseConfirmDelete}>
          {t('page.tracking.table.modal.delete.btn.close')}
          </Button>
        </Stack>
        <Modal
          open={openConfirmDelete}
          onClose={handleCloseConfirmDelete}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 400 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <g id="evaCheckmarkCircle2Fill0">
                  <g id="evaCheckmarkCircle2Fill1">
                    <path
                      id="evaCheckmarkCircle2Fill2"
                      fill="#229a16"
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39a1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08l3.78-5a1 1 0 1 1 1.6 1.22Z"
                    />
                  </g>
                </g>
              </svg>
              <h2 id="child-modal-title">{t('page.tracking.table.modal.delete.success.title')}</h2>
            </Stack>
            <p id="child-modal-description" style={{whiteSpace:'pre-line'}}>
            {t('page.tracking.table.modal.delete.success.text')}{' '}
            </p>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button onClick={handleCloseDelete} variant="outlined">
              {t('page.tracking.table.modal.delete.success.btn.close')}
              </Button>
            </Stack>
          </Box>
        </Modal>
      </>
    );
  }


  return (
    <>
      <Helmet>
        <title> {t('page.tracking.tab')} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
          {t('page.tracking.title')}
          </Typography>
          {/* <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>
        {/* Trecho sample GET */}
        {/* <Box>
          <div>
            <p>Usuário: {user?.login}</p>
            <p>Biografia: {user?.bio}</p>
          </div>

          <div>
            <p>Nome: {jedi?.name}</p>
            <p>Ano de nascimento: {jedi?.birth_year}</p>
          </div>
        </Box> */}
        <Card sx={{ '& .simplebar-placeholder': { display: 'none' } }}>
          <TrackingToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TrackingHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={STORAGELIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, storage, nf, status, subsidiary, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(storage) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, storage)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={storage} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {storage}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{subsidiary}</TableCell>

                        <TableCell align="left">
                          <Label
                            color={
                              (status === 'Delayed' && 'warning' || status === 'Atrasado' && 'warning') ||
                              (status === 'Cancelled' && 'error' || status === 'Cancelado' && 'error') ||
                              (status === 'On Transit' && 'info' || status === 'En transito' && 'info' || status === 'Em transito' && 'info') ||
                              'success'
                            }
                          >
                            {sentenceCase(status)}
                          </Label>
                        </TableCell>
                        <TableCell align="left">
                          {nf === 'file' ||
                          ((nf === 'file' || nf === 'waiting upload') && status === 'cancelled' && 'error') ? (
                            <Link
                              onClick={handleOpenFile}
                              sx={{
                                cursor: 'pointer',
                                padding: '6px 16px',
                                borderRadius: '6px',
                                '&:hover': { backgroundColor: 'rgba(32, 101, 209, 0.1)' },
                              }}
                            >
                              {t('page.tracking.table.row.link')}
                            </Link>
                          ) : (
                            <Button
                              component="label"
                              type="file"
                              variant="outlined"
                              startIcon={<Iconify icon="eva:cloud-upload-outline" />}
                            >
                              {' '}
                              {t('page.tracking.table.row.btn.upload')}
                              <VisuallyHiddenInput type="file" />
                            </Button>
                          )}
                        </TableCell>

                        {/* Modal NF */}
                        <Modal
                          open={openFile}
                          onClose={handleCloseFile}
                          aria-labelledby="parent-modal-title"
                          aria-describedby="parent-modal-description"
                          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
                        >
                          <Box sx={{ ...style, minWidth: 800 }}>
                            <Stack sx={{display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent:'space-between'}}>
                              <h2 id="parent-modal-title">{t('page.tracking.table.modal.nf.title')}</h2> 
                              <TableCell align="right">
                                <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                                  <Iconify icon={'eva:more-vertical-fill'} />
                                </IconButton>
                              </TableCell>
                              <Popover
                                open={Boolean(open)}
                                anchorEl={open}
                                onClose={handleCloseMenu}
                                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                PaperProps={{
                                  sx: {
                                    p: 1,
                                    width: 'auto',
                                    '& .MuiMenuItem-root': {
                                      px: 1,
                                      typography: 'body2',
                                      borderRadius: 0.75,
                                    },
                                  },
                                }}
                              >
                                <MenuItem >
                                  <Iconify icon={'eva:share-outline'} sx={{ mr: 2 }} />
                                  {t('page.tracking.table.modal.nf.options.share')}
                                </MenuItem>

                                <MenuItem sx={{ color: 'error.main'}}>
                                  <Iconify icon={'tabler:file-spreadsheet'} sx={{ mr: 2 }}/>
                                  {t('page.tracking.table.modal.nf.options.print')}
                                </MenuItem>
                              </Popover>                        
                            </Stack>
                            <Stack sx={{border:'1px solid lightgray', borderRadius: '5px'}}>
                              <br/>
                            </Stack>
                            {/* <FileChildModal /> */}
                            <Box sx={{display:'flex', alignItems:'center', flexDirection:'column', mt:3}}>
                              <Button sx={{alignSelf:'center' }} variant='contained' onClick={handleCloseFile}>{t('page.tracking.table.modal.nf.btn.close')}</Button>
                            </Box>
                          </Box>
                        </Modal>

                        <TableCell align="left">
                          {status === 'Cancelled' || status === 'Delivered' || status === 'Cancelado' || status === 'Entregue' || status === 'Entregado' ? (
                            <Button variant="contained" disabled>
                              {t('page.tracking.table.row.btn.finished')}
                            </Button>
                          ) : (
                            <Button onClick={handleOpenConfirm} variant="contained">
                              {t('page.tracking.table.row.btn.confirm')}
                            </Button>
                          )}
                          {/* <Confirm/> */}
                        </TableCell>

                        {/* Modal Confirmação */}
                        <Modal
                          open={openConfirm}
                          onClose={handleCloseConfirm}
                          aria-labelledby="parent-modal-title"
                          aria-describedby="parent-modal-description"
                          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
                        >
                          <Box sx={{ ...style, minWidth: 400, whiteSpace:'pre-line' }}>
                            <h2 id="parent-modal-title">{t('page.tracking.table.modal.confirm.title')}</h2>
                            <p id="parent-modal-description">
                            {t('page.tracking.table.modal.confirm.text')}
                            </p>
                            <ConfirmChildModal />
                          </Box>
                        </Modal>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            {t('page.tracking.table.row.search.notfound')}
                          </Typography>

                          <Typography variant="body2">
                          {t('page.tracking.table.row.search.noresults')} &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> {t('page.tracking.table.row.search.try')}
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={STORAGELIST.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage={t('page.tracking.table.pagination.title')}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 'auto',
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem disabled>
          <Iconify icon={'eva:edit-2-outline'} sx={{ mr: 2 }} />
          {t('page.tracking.table.row.options.edit')}
        </MenuItem>

        <MenuItem onClick={handleOpenDelete} sx={{ color: 'error.main'}}>
          <Iconify icon={'mingcute:delete-2-line'} sx={{ mr: 2 }}/>
          {t('page.tracking.table.row.options.delete')}
        </MenuItem>
      </Popover>

      {/* Modal Delete */}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
      >
        <Box sx={{ ...style, minWidth: 400, whiteSpace:'pre-line' }}>
          <h2 id="parent-modal-title">{t('page.tracking.table.modal.delete.title')}</h2>
          <p id="parent-modal-description">
          {t('page.tracking.table.modal.delete.text')}
          </p>
          <ConfirmDeleteModal/>
        </Box>
      </Modal>
    </>
  );
}
