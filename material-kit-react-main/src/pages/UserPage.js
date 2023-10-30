import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Box,
  Paper,
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
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';

// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------
// refactor i18next
const TABLE_HEAD = [
  { id: 'name', label: i18next.t('page.user.table.head.name'), alignRight: false },
  { id: 'company', label:i18next.t('page.user.table.head.company'), alignRight: false },
  { id: 'role', label: i18next.t('page.user.table.head.role'), alignRight: false },
  { id: 'isVerified', label: i18next.t('page.user.table.head.verified'), alignRight: false },
  { id: 'status', label: i18next.t('page.user.table.head.status'), alignRight: false },
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
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserPage() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

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
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(true)
  };
  const handleCloseDelete = () => {
    setOpenDelete(false)
  };

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
        <title> {t('page.user.tab')} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            {t('page.user.title')}
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            {t('page.user.btn.newuser')}
          </Button>
        </Stack>

        <Card sx={{ '& .simplebar-placeholder': { display: 'none' } }}>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{company}</TableCell>

                        <TableCell align="left">{role}</TableCell>

                        <TableCell align="left">{isVerified ? t('page.user.table.row.verified.yes') : t('page.user.table.row.verified.no')}</TableCell>

                        <TableCell align="left">
                          <Label color={(status === 'disabled' && 'error') || (status === 'desativado' && 'error') || (status === 'desactivado' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell>

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
                            {t('page.user.table.row.search.notfound')}
                          </Typography>

                          <Typography variant="body2">
                            {t('page.user.table.row.search.noresults')} &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> {t('page.user.table.row.search.try')}
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
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}scope=''
            labelRowsPerPage={t('page.user.table.pagination.title')}
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
        <MenuItem >
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
