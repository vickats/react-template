import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function RecoverPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // const handleClick = () => {
  //   navigate('/verifycode', { replace: true });
  // };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name="email" label="Email address" />

        {/* <TextField
          name="password"
          label="Password"
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
        /> */}
      </Stack>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          navigate('/verifycode', { replace: true });
        }}
      >
        Send verification
      </LoadingButton>

      {/* <Stack sx={{ mx: 'auto', py: 3 }}>
        <Typography variant="body2" sx={{ mb: 5 }}>
          Don't need a recovery anymore ? {''}
          <Link variant="subtitle2" href="login">
            Login
          </Link>
        </Typography>
      </Stack> */}
    </>
  );
}
