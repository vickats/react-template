import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover, Select } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import { Icon } from '@iconify/react';

import * as React from 'react';

// ----------------------------------------------------------------------

// const LANGS = [
//   {
//     value: 'en',
//     label: 'English',
//     icon: '/assets/icons/ic_flag_en.svg',
//   },
//   {
//     value: 'pt-br',
//     label: 'Portuguese (BR)',
//     icon: '/assets/icons/ic_flag_pt-br.svg',
//   },
//   {
//     value: 'es',
//     label: 'Spanish',
//     icon: '/assets/icons/ic_flag_es.svg',
//   },
// ];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const [lng, setLng] = React.useState('');

  const handleChange = (event) => {
    setLng(event.target.data);
    // currentLngFlag:'en'
  };

  // i18n
  const { i18n } = useTranslation();

  const lngs = {
    en: { nativeName: 'English', icon: '/assets/icons/ic_flag_en.svg' },
    pt: { nativeName: 'Português (PT-BR)', icon: '/assets/icons/ic_flag_pt-br.svg' },
    es: { nativeName: 'Español', icon: '/assets/icons/ic_flag_es.svg' },
  };

  return (
    <>
      {/* {Object.keys(lngs).map((lng) => (
        <IconButton
          onClick={handleOpen}
          onChange={handleChange}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
            ...(open && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
            }),
          }}
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type="submit"                  
        >
          <img src={lngs[lng].icon} alt={lngs[lng].nativeName} />
        </IconButton>
      ))} */}
        <IconButton
          onClick={handleOpen}
          onChange={handleChange}
          sx={{
            padding: 0,
            width: 44,
            height: 44,
            ...(open && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
            }),
          }}
                          
        >
          {/* <img src={lngs.en.icon} alt={lngs.en.nativeName} /> */}
          <Icon icon="clarity:language-line" width="32" height="32"/>
        </IconButton>


      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 'auto',
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {Object.keys(lngs).map((lng) => (
            <MenuItem
              key={lng}
              style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              type="submit"
              onClick={() => {i18n.changeLanguage(lng); window.location.reload()}}
            >
              <Box component="img" alt={lngs[lng].nativeName} src={lngs[lng].icon} sx={{ width: 28, mr: 2 }} />
              {lngs[lng].nativeName}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
