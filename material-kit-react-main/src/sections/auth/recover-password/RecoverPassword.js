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

// ----------------------------------------------------------------------

export default function RecoverPassword() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // const handleClick = () => {
  //   navigate('/verifycode', { replace: true });
  // };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name={t('recover.form.email')} label={t('recover.form.email')} />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          navigate('/verifycode', { replace: true });
        }}
      >
        {t('recover.form.btn.send')}
      </LoadingButton>

    </>
  );
}
