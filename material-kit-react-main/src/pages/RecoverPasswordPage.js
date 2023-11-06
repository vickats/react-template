import { Helmet } from 'react-helmet-async';
import { FormControl } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';
// hooks
import useResponsive from '../hooks/useResponsive';

import Logo from '../components/logo';
import Iconify from '../components/iconify';
import { RecoverPassword } from '../sections/auth/recover-password';
import LanguagePopover from '../components/LanguagePopover'

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
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function RecoverPasswordPage() {
  const {t} = useTranslation();
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title>{t('recover.tab')}</title>
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
            {t('recover.greetings')}
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
            <Stack sx={{display:'flex', justifyContent:'flex-end', flexDirection:'row'}}>
              <LanguagePopover/>
            </Stack>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              {t('recover.form.title')}
            </Typography>
            <Typography variant="p" gutterBottom>
              {t('recover.form.text')}
            </Typography>

            {/* <FormControl></FormControl> */}

            <RecoverPassword />
            <Outlet />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
