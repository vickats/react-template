import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // const gotToDashboard = () => {
  //   navigate('/dashboard', { replace: true });
  // };

  return (
    <>
      <Stack spacing={3}>
        <TextField name={t('login.form.email')} label={t('login.form.email')} />

        <TextField
          name={t('login.form.password')}
          label={t('login.form.password')}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel sx={{ margin: 0 }} control={<Checkbox />} label={t('login.form.remember')} name={t('login.form.remember')} />
        <Link
          variant="subtitle2"
          underline="hover"
          onClick={() => {
            navigate('/recover', { replace: true });
          }}
        >
          {t('login.form.forgot')}
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          navigate('/dashboard', { replace: true });
        }}
      >
        {t('login.form.btn.login')}
      </LoadingButton>
    </>
  );
}
