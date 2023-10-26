import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Item,
  Container,
  FormControl,
  Input,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Grid spacing={1} sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <TextField name="email" label="Email address" xs="12" />

        <TextField
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
        />

        <TextField />
      </Grid>

      {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot email/password?
        </Link>
      </Stack> */}
      {/* <Box></Box> */}
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        sx={{ my: 4, maxWidth: '320px', alignSelf: 'center' }}
      >
        Register
      </LoadingButton>
    </>
  );
}
