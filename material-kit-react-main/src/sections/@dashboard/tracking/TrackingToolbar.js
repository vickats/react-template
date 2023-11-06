import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as React from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Grid, Stack, Popover, MenuItem, Checkbox, FormGroup, FormControlLabel, FormControl, Divider, Button } from '@mui/material';
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

TrackingToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

// ----------------------------------------------------------------------
const statusOptions = [
  i18next.t('page.tracking.table.row.options.filter.category.status.delivered'), i18next.t('page.tracking.table.row.options.filter.category.status.ontransit'), i18next.t('page.tracking.table.row.options.filter.category.status.delayed'), i18next.t('page.tracking.table.row.options.filter.category.status.cancelled')
];

const invoiceOptions = [
  i18next.t('page.tracking.table.row.options.filter.category.invoice.file'), i18next.t('page.tracking.table.row.options.filter.category.invoice.toupload'),
];
// ----------------------------------------------------------------------
export default function TrackingToolbar({ numSelected, filterName, onFilterName }) {
  const {t} = useTranslation();
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

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

  const [selectedInvoice, setSelectedInvoice] = useState([]);
  const isAllSelectedInvoice = invoiceOptions.length > 0 && selectedInvoice.length === invoiceOptions.length;

  const handleInvoiceFilterChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === 'all') {
      setSelectedInvoice(selectedInvoice.length === invoiceOptions.length ? [] : invoiceOptions);
      return;
    }
    if (selectedInvoice.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selectedInvoice.filter((s) => s !== value);
      setSelectedInvoice(newSelected);
    } else {
      // if value not present
      setSelectedInvoice([...selectedInvoice, value]);
    }
  };

  const invoiceFilter = invoiceOptions.map((invoice) => {
    return (
      <FormControlLabel
        label={invoice}
        key={invoice}
        control={<Checkbox value={invoice} onChange={handleInvoiceFilterChange} checked={selectedInvoice.includes(invoice)} />}
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
          {numSelected} {t('page.tracking.table.head.select')}
        </Typography>
      ) : (
        <StyledSearch
          value={filterName}
          onChange={onFilterName}
          placeholder={i18next.t('page.tracking.table.row.search.placeholder')}
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
        <Tooltip title={t('page.tracking.table.row.options.filter.title')}>
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
        
        <Stack sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
          <FormControlLabel
            label={t('page.tracking.table.row.options.filter.category.status.title')}
            control={<Checkbox value="all" checked={isAllSelectedStatus} onChange={handleStatusFilterChange} />}
          />
          <FormControl sx={{ml:3}}>
            <FormGroup>{statusFilter}</FormGroup>
          </FormControl>
        </Stack>
      
        <Divider/>
        
        <Stack sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
          <FormControlLabel
            label={t('page.tracking.table.row.options.filter.category.invoice.title')}
            control={<Checkbox value="all" checked={isAllSelectedInvoice} onChange={handleInvoiceFilterChange} />}
          />
          <FormControl sx={{ml:3}}>
            <FormGroup>{invoiceFilter}</FormGroup>
          </FormControl>
        </Stack>
        <Stack sx={{display:'flex', alignItems:'center', py: 2}}>
          <Button type="submit" variant="contained" sx={{width:'fit-content'}}>Filter</Button>
        </Stack>
      </Popover>
    </StyledRoot>
  );
}
