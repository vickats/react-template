import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';
// components
import Iconify from '../../../components/iconify';
import LanguagePopover from '../../../components/LanguagePopover';

// ----------------------------------------------------------------------

export default function VerifyCodeRecover() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  //   const handleClick = () => {
  //     navigate('/login', { replace: true });
  //   };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name={t('recover.form.code')} label={t('recover.form.code')}/>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          navigate('/login', { replace: true });
        }}
      >
        {t('recover.form.btn.validate')}
      </LoadingButton>
    </>
  );
}
