import { useState, useEffect } from 'react';
import * as React from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Popover, MenuItem, Checkbox, Stack, FormGroup, FormControl, FormControlLabel, Divider, Button } from '@mui/material';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';
// component
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

// ----------------------------------------------------------------------
const statusOptions = [
  i18next.t('page.user.table.row.options.filter.category.verify.yes'), i18next.t('page.user.table.row.options.filter.category.verify.no')
];

const verifyOptions = [
  i18next.t('page.user.table.row.options.filter.category.status.active'), i18next.t('page.user.table.row.options.filter.category.status.inactive'),
];
// ----------------------------------------------------------------------

export default function UserListToolbar({ numSelected, filterName, onFilterName }) {
  const {t} = useTranslation();

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const [selectedVerify, setSelectedVerify] = useState([]);
  const isAllSelectedVerify = verifyOptions.length > 0 && selectedVerify.length === verifyOptions.length;

  const handleVerifyFilterChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === 'all') {
      setSelectedVerify(selectedVerify.length === verifyOptions.length ? [] : verifyOptions);
      return;
    }
    if (selectedVerify.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selectedVerify.filter((s) => s !== value);
      setSelectedVerify(newSelected);
    } else {
      // if value not present
      setSelectedVerify([...selectedVerify, value]);
    }
  };

  const verifyFilter = verifyOptions.map((verify) => {
    return (
      <FormControlLabel
        label={verify}
        key={verify}
        control={<Checkbox value={verify} onChange={handleVerifyFilterChange} checked={selectedVerify.includes(verify)} />}
      />
    );
  });

  const [selectedStatus, setSelectedStatus] = useState([]);
  const isAllSelectedStatus = statusOptions.length > 0 && selectedStatus.length === statusOptions.length;

  const handleStatusFilterChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === 'all') {
      setSelectedStatus(selectedStatus.length === statusOptions.length ? [] : statusOptions);
      return;
    }
    if (selectedStatus.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selectedStatus.filter((s) => s !== value);
      setSelectedStatus(newSelected);
    } else {
      // if value not present
      setSelectedStatus([...selectedStatus, value]);
    }
  };

  const statusFilter = statusOptions.map((status) => {
    return (
      <FormControlLabel
        label={status}
        key={status}
        control={<Checkbox value={status} onChange={handleStatusFilterChange} checked={selectedStatus.includes(status)} />}
      />
    );
  });
// ----------------------------------------------------------------------
  return (
    <StyledRoot
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} {t('page.user.table.head.select')}
        </Typography>
      ) : (
        <StyledSearch
          value={filterName}
          onChange={onFilterName}
          placeholder={i18next.t('page.user.table.row.search.placeholder')}
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

{numSelected > 0 ? (
        <Stack flexDirection="row">
          <Tooltip title={t('page.tracking.table.row.options.excel')}>
            <IconButton>
              <Iconify icon="tabler:file-spreadsheet" />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('page.tracking.table.row.options.share')}>
            <IconButton>
              <Iconify icon="eva:share-outline" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <Tooltip title={t('page.user.table.row.options.filter.title')}>
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
        
      )}
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 2,
            width: 'auto',
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >                       
        <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            label={t('page.user.table.row.options.filter.category.verify.title')}
            control={<Checkbox value="all" checked={isAllSelectedVerify} onChange={handleVerifyFilterChange} />}
          />
          <FormControl sx={{ml:3}}>
            <FormGroup>{verifyFilter}</FormGroup>
          </FormControl>
        </Stack>
        <Divider sx={{my: 1}}/>
        <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControlLabel
            label={t('page.user.table.row.options.filter.category.status.title')}
            control={<Checkbox value="all" checked={isAllSelectedStatus} onChange={handleStatusFilterChange} />}
          />
          <FormControl sx={{ml:3}}>
            <FormGroup>{statusFilter}</FormGroup>
          </FormControl>
        </Stack>
        <Stack sx={{display:'flex', alignItems:'center', py: 2}}>
          <Button type="submit" variant="contained" sx={{width:'fit-content'}}>Filter</Button>
        </Stack>
      </Popover>
    </StyledRoot>
  );
}
