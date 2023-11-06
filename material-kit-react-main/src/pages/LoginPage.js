import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';

// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
import  LanguagePopover  from '../components/LanguagePopover';

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
  padding: theme.spacing(0, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const {t} = useTranslation();
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title>{t('login.tab')}</title>
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
            {t('login.greetings')}
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
            {t('login.form.title')}
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              {t('login.form.noaccount')} {''}
              <Link variant="subtitle2" href="signup">
              {t('login.form.register')}
              </Link>
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              {/* <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="ant-design:project-filled" color="#1C9CEA" width={22} height={22} />
              </Button> */}
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {t('login.form.or')}
              </Typography>
            </Divider>

            <LoginForm />
          </StyledContent>
          
        </Container>
      </StyledRoot>
    </>
  );
}
