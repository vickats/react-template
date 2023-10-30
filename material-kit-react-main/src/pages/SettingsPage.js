import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Grid, FormHelperText, Button } from '@mui/material';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../i18n';

import { Settings } from '../sections/@dashboard/settings';

export default function SettingsPage() {
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title> {t('page.settings.tab')} </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
            {t('page.settings.title')}
          </Typography>
        </Stack>

        <Settings />
        
      </Container>
    </>
  );
}
