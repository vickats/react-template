import { Helmet } from 'react-helmet-async';
import { FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import { SignUpForm } from '../sections/auth/signup';
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import LanguagePopover from '../components/LanguagePopover';

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
  // minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(0, 0),
}));

// ----------------------------------------------------------------------

export default function SignUpPage() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <>
      <Helmet>
        <title> {t('signup.tab')} </title>
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
          <StyledSection sx={{height: '100vh' }}>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            {t('signup.greetings')}
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="md">
          <Stack sx={{display:'flex', justifyContent:'flex-end', flexDirection:'row'}}>
            <LanguagePopover/>
          </Stack>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
            {t('signup.form.title')}
            </Typography>

            {/* <FormControl></FormControl> */}

            <Typography variant="body2" sx={{ mb: 5 }}>
            {t('signup.form.account')} {''}
              <Link onClick={handleClick} variant="subtitle2">{t('signup.form.login')}</Link>
            </Typography>

            <SignUpForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
