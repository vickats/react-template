import { Helmet } from 'react-helmet-async';
import { FormControl } from 'react-bootstrap';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import { SignUpForm } from '../sections/auth/signup';
import Logo from '../components/logo';
import Iconify from '../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function SignUpPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Sign Up </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome !
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Get registered
            </Typography>

            {/* <FormControl></FormControl> */}

            <Typography variant="body2" sx={{ mb: 5 }}>
              Already have an account? {''}
              <Link variant="subtitle2">Login</Link>
            </Typography>

            <SignUpForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
