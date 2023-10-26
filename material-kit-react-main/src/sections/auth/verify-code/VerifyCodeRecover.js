import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function VerifyCodeRecover() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  //   const handleClick = () => {
  //     navigate('/login', { replace: true });
  //   };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField name="code" label="Code" type="text" />
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
        Validate code
      </LoadingButton>
    </>
  );
}
