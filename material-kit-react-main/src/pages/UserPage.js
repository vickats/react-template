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
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  TextField,
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
          {t('page.user.table.modal.delete.btn.confirm')}
          </Button>
          <Button variant="outlined" onClick={handleCloseConfirmDelete}>
          {t('page.user.table.modal.delete.btn.close')}
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
              <Iconify icon={'eva:checkmark-circle-2-fill'} color="#229a16" width="2.25rem" height="2.25rem" />
              <h2 id="child-modal-title">{t('page.user.table.modal.delete.success.title')}</h2>
            </Stack>
            <p id="child-modal-description" style={{whiteSpace:'pre-line'}}>
            {t('page.user.table.modal.delete.success.text')}{' '}
            </p>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button onClick={handleCloseDelete} variant="outlined">
              {t('page.user.table.modal.delete.success.btn.close')}
              </Button>
            </Stack>
          </Box>
        </Modal>
      </>
    );
  }

  // New User 
  const [openNewUser, setOpenNewUser] = useState(false);

  const handleOpenNewUser = () => {
    setOpenNewUser(true)
  };
  const handleCloseNewUser = () => {
    setOpenNewUser(false)
  };

  // Confirm/Success New User Modal
  function ConfirmNewUserModal() {
    const [openConfirmNewUser, setOpenConfirmNewUser] = useState(false);

    const handleOpenConfirmNewUser = () => {
      setOpenConfirmNewUser(true);
    };
    const handleCloseConfirmNewUser = () => {
      setOpenConfirmNewUser(false);
    };

    const [openSuccessNewUser, setOpenSuccessNewUser] = useState(false);

    const handleOpenSuccessNewUser = () => {
      setOpenSuccessNewUser(true);
    };
    const handleCloseSuccessNewUser = () => {
      setOpenSuccessNewUser(false);
    };

    return (
      <>
        <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
          <Button variant="contained" onClick={handleOpenConfirmNewUser}>
            {t('page.user.table.modal.create.btn.create')}
          </Button>
          <Button variant="outlined" onClick={handleCloseNewUser}>
            {t('page.user.table.modal.create.btn.cancel')}
          </Button>
        </Stack>

        {/* Modal confirm */}
        <Modal
          open={openConfirmNewUser}
          onClose={handleCloseConfirmNewUser}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 450 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <Iconify icon={'eva:alert-triangle-fill'} color="#efa61b" width="2.25rem" height="2.25rem" />
              <h2 id="child-modal-title">{t('page.user.table.modal.create.confirm.title')}</h2>
            </Stack>
            <List sx={{display: 'flex', flexDirection: 'row'}}>
              <ListItem disablePadding>
                <ListItemText primary="Name" secondary="Name"/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="ID" secondary="123456"/>
              </ListItem>
            </List>
            <List sx={{display: 'flex', flexDirection: 'row'}}>
              <ListItem disablePadding>
                <ListItemText primary="Email" secondary="name@mail.com"/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Subsidiary" secondary="Cajamar"/>
              </ListItem>              
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Level" secondary="L1"/>
              </ListItem>
            </List>

            <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
              <Button onClick={handleOpenSuccessNewUser} variant="contained">
              {t('page.user.table.modal.create.confirm.btn.confirm')}
              </Button>
              <Button onClick={handleCloseConfirmNewUser} variant="outlined">
              {t('page.user.table.modal.create.confirm.btn.cancel')}
              </Button>
            </Stack>
          </Box>
        </Modal>

        {/* Modal success */}
        <Modal
          open={openSuccessNewUser}
          onClose={handleCloseSuccessNewUser}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 400 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <Iconify icon={'eva:checkmark-circle-2-fill'} color="#229a16" width="2.25rem" height="2.25rem" />
              <h2 id="child-modal-title">{t('page.user.table.modal.create.success.title')}</h2>
            </Stack>
            <p id="child-modal-description" style={{whiteSpace:'pre-line'}}>
            {t('page.user.table.modal.create.success.text')}{' '}
            </p>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button onClick={handleCloseNewUser} variant="outlined">
              {t('page.user.table.modal.create.success.btn.close')}
              </Button>
            </Stack>
          </Box>
        </Modal>
        
      </>
    );
  }
  const [openEditUser, setOpenEditUser] = useState(false);

  const handleOpenEditUser = () => {
    setOpenEditUser(true)
  };
  const handleCloseEditUser = () => {
    setOpenEditUser(false)
  };
  // Confirm/Success Edit User Modal
  function ConfirmEditUserModal() {
    const [openConfirmEditUser, setOpenConfirmEditUser] = useState(false);

    const handleOpenConfirmEditUser = () => {
      setOpenConfirmEditUser(true);
    };
    const handleCloseConfirmEditUser = () => {
      setOpenConfirmEditUser(false);
    };

    const [openSuccessEditUser, setOpenSuccessEditUser] = useState(false);

    const handleOpenSuccessEditUser = () => {
      setOpenSuccessEditUser(true);
    };
    const handleCloseSuccessEditUser = () => {
      setOpenSuccessEditUser(false);
    };

    return (
      <>
        <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
          <Button variant="contained" onClick={handleOpenConfirmEditUser}>
            {t('page.user.table.modal.edit.btn.save')}
          </Button>
          <Button variant="outlined" onClick={handleCloseEditUser}>
            {t('page.user.table.modal.edit.btn.cancel')}
          </Button>
        </Stack>

        {/* Modal confirm */}
        <Modal
          open={openConfirmEditUser}
          onClose={handleCloseConfirmEditUser}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 450 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <Iconify icon={'eva:alert-triangle-fill'} color="#efa61b" width="2.25rem" height="2.25rem" />
              <h2 id="child-modal-title">{t('page.user.table.modal.edit.confirm.title')}</h2>
            </Stack>
            <List sx={{display: 'flex', flexDirection: 'row'}}>
              <ListItem disablePadding>
                <ListItemText primary="Name" secondary="Name"/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="ID" secondary="123456"/>
              </ListItem>
            </List>
            <List sx={{display: 'flex', flexDirection: 'row'}}>
              <ListItem disablePadding>
                <ListItemText primary="Email" secondary="name@mail.com"/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Subsidiary" secondary="Cajamar"/>
              </ListItem>              
            </List>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Level" secondary="L1"/>
              </ListItem>
            </List>

            <Stack align="center" direction="row" justifyContent={'center'} spacing={3} sx={{mt:4}}>
              <Button onClick={handleOpenSuccessEditUser} variant="contained">
              {t('page.user.table.modal.edit.confirm.btn.confirm')}
              </Button>
              <Button onClick={handleCloseConfirmEditUser} variant="outlined">
              {t('page.user.table.modal.edit.confirm.btn.cancel')}
              </Button>
            </Stack>
          </Box>
        </Modal>

        {/* Modal success */}
        <Modal
          open={openSuccessEditUser}
          onClose={handleCloseSuccessEditUser}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 400 }}>
            <Stack direction="row" spacing={2} alignItems={'center'} pt={2}>
              <Iconify icon={'eva:checkmark-circle-2-fill'} color="#229a16" width="2.25rem" height="2.25rem" />
              <h2 id="child-modal-title">{t('page.user.table.modal.edit.success.title')}</h2>
            </Stack>
            <p id="child-modal-description" style={{whiteSpace:'pre-line'}}>
            {t('page.user.table.modal.edit.success.text')}{' '}
            </p>
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Button onClick={handleCloseEditUser} variant="outlined">
              {t('page.user.table.modal.edit.success.btn.close')}
              </Button>
            </Stack>
          </Box>
        </Modal>
        
      </>
    );
  }

  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneMobile, setPhoneMobile] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [complement, setComplement] = useState();
  const [subsidiary, setSubsidiary] = useState();
  const [jobPosition, setJobPosition] = useState();
  const [permission, setPermission] = useState();

  return (
    <>
      <Helmet>
        <title> {t('page.user.tab')} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            {t('page.user.title')}
          </Typography>
          <Button onClick={handleOpenNewUser} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            {t('page.user.btn.newuser')}
          </Button>
        </Stack>

        {/* Modal New User */}
        <Modal
          open={openNewUser}
          onClose={handleCloseNewUser}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
        >
          <Box sx={{ ...style, minWidth: 800, whiteSpace:'pre-line' }}>
            <h2 id="parent-modal-title">{t('page.user.table.modal.create.title')}</h2>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, my: 2, width: '30ch' },
              }}
              noValidate={false}
              autoComplete="off"
            >
              <Grid display='flex'>
                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.name')} placeholder={t('page.user.table.modal.create.fields.name')} value={name}/>

                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.lastname')}  placeholder={t('page.user.table.modal.create.fields.lastname')} value={lastname}  />

                <TextField
                  type="number"
                  required
                  id="outlined-required"
                  variant="outlined"
                  label="ID"
                  value={id}                 
                />
              </Grid>
              <Grid display="flex">
                <TextField
                  type="email"
                  required
                  id="outlined-required"
                  variant="outlined"
                  label="Email"
                  value={email}                 
                />
                <TextField
                  type="number"
                  required
                  id="outlined-required"
                  variant="outlined"
                  placeholder={t('page.user.table.modal.create.fields.phoneNumber')}
                  label={t('page.user.table.modal.create.fields.phoneNumber')}
                  value={phoneNumber}
                  
                />
                <TextField
                  type="number"
                  id="outlined-required"
                  variant="outlined"
                  label={t('page.user.table.modal.create.fields.phoneMobile')}
                  placeholder={t('page.user.table.modal.create.fields.phoneMobile')}
                  value={phoneMobile}
                  
                />
              </Grid>
              <Grid display="flex">
                <TextField required id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.country')} placeholder={t('page.user.table.modal.create.fields.country')} value={country}  />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  label={t('page.user.table.modal.create.fields.address')}
                  placeholder={t('page.user.table.modal.create.fields.address')}
                  value={address}
                  
                />
                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.complement')} placeholder={t('page.user.table.modal.create.fields.complement')} value={complement}  />
              </Grid>
              <Grid display="flex">
                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.subsidiary')} placeholder={t('page.user.table.modal.create.fields.subsidiary')} value={subsidiary}  />
                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.position')} placeholder={t('page.user.table.modal.create.fields.position')} value={jobPosition}  />
                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.create.fields.permission')} palceholder={t('page.user.table.modal.create.fields.permission')} value={permission}  />
              </Grid>
            </Box>
            <ConfirmNewUserModal/>
          </Box>
        </Modal>

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
                          <MenuItem onClick={handleOpenEditUser}>
                            <Iconify icon={'eva:edit-2-outline'} sx={{ mr: 2 }} />
                            {t('page.tracking.table.row.options.edit')}
                          </MenuItem>
                          {status === 'error' ? 
                          <MenuItem >
                            activate
                          </MenuItem>:<MenuItem onClick={handleOpenDelete} sx={{ color: 'error.main'}}>
                            <Iconify icon={'mingcute:delete-2-line'} sx={{ mr: 2 }}/>
                            {t('page.tracking.table.row.options.delete')}
                          </MenuItem>}
                          
                        </Popover>

                        {/* Modal Edit */}
                        <Modal
                          open={openEditUser}
                          onClose={handleCloseEditUser}
                          aria-labelledby="parent-modal-title"
                          aria-describedby="parent-modal-description"
                          sx={{ '& .MuiBackdrop-root.MuiModal-backdrop': { backgroundColor: 'rgba(33, 43, 54, 0.1)' } }}
                        >
                          <Box sx={{ ...style, minWidth: 800, whiteSpace:'pre-line' }}>
                            <h2 id="parent-modal-title">{t('page.user.table.modal.edit.title')}</h2>
                            <Box
                              component="form"
                              sx={{
                                '& .MuiTextField-root': { m: 1, my: 2, width: '30ch' },
                              }}
                              noValidate={false}
                              autoComplete="off"
                            >
                              <Grid display='flex'>
                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.name')} placeholder={t('page.user.table.modal.edit.fields.name')} value={name}/>

                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.lastname')}  placeholder={t('page.user.table.modal.edit.fields.lastname')} value={lastname}  />

                                <TextField
                                  type="number"
                                  required
                                  id="outlined-required"
                                  variant="outlined"
                                  label="ID"
                                  value={id}                 
                                />
                              </Grid>
                              <Grid display="flex">
                                <TextField
                                  type="email"
                                  required
                                  id="outlined-required"
                                  variant="outlined"
                                  label="Email"
                                  value={email}                 
                                />
                                <TextField
                                  type="number"
                                  required
                                  id="outlined-required"
                                  variant="outlined"
                                  placeholder={t('page.user.table.modal.edit.fields.phoneNumber')}
                                  label={t('page.user.table.modal.edit.fields.phoneNumber')}
                                  value={phoneNumber}
                                  
                                />
                                <TextField
                                  type="number"
                                  id="outlined-required"
                                  variant="outlined"
                                  label={t('page.user.table.modal.edit.fields.phoneMobile')}
                                  placeholder={t('page.user.table.modal.edit.fields.phoneMobile')}
                                  value={phoneMobile}
                                  
                                />
                              </Grid>
                              <Grid display="flex">
                                <TextField required id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.country')} placeholder={t('page.user.table.modal.edit.fields.country')} value={country}  />
                                <TextField
                                  id="outlined-required"
                                  variant="outlined"
                                  label={t('page.user.table.modal.edit.fields.address')}
                                  placeholder={t('page.user.table.modal.edit.fields.address')}
                                  value={address}
                                  
                                />
                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.complement')} placeholder={t('page.user.table.modal.edit.fields.complement')} value={complement}  />
                              </Grid>
                              <Grid display="flex">
                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.subsidiary')} placeholder={t('page.user.table.modal.edit.fields.subsidiary')} value={subsidiary}  />
                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.position')} placeholder={t('page.user.table.modal.edit.fields.position')} value={jobPosition}  />
                                <TextField id="outlined-required" variant="outlined" label={t('page.user.table.modal.edit.fields.permission')} palceholder={t('page.user.table.modal.edit.fields.permission')} value={permission}  />
                              </Grid>
                            </Box>
                            <ConfirmEditUserModal/>
                          </Box>
                        </Modal>

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

      
    </>
  );
}
