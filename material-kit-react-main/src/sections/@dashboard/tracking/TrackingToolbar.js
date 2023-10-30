import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import * as React from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Grid, Stack, Popover, MenuItem, Checkbox, FormGroup } from '@mui/material';
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
  'Delivered', 'On transit', 'Delayed', 'Cancelled'
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
        <MenuItem >
          <Checkbox/>
          {/* <Iconify icon={'eva:edit-2-outline'} sx={{ mr: 2 }} /> */}
          {t('page.tracking.table.row.options.edit')}         
        </MenuItem>

        <MenuItem sx={{ color: 'error.main'}}>
          <Checkbox/>
          {/* <Iconify icon={'mingcute:delete-2-line'} sx={{ mr: 2 }}/> */}
          {t('page.tracking.table.row.options.delete')}
        </MenuItem>
      </Popover>
    </StyledRoot>
  );
}
