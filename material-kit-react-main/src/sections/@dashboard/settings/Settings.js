import { Card, TextField, Stack, Box, Grid, FormHelperText, Button } from '@mui/material';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';

import SettingsTabContent from './SettingsTabContent';


export default function Settings() {
  const {t} = useTranslation();
  return (
    <>
      <Card sx={{ p: 3 }}>
        <SettingsTabContent />

        <Grid sx={{ p: 3,  }}>
          <FormHelperText>
          {t('page.settings.helperText')}
          </FormHelperText>
          <Button variant="contained" type="submit" sx={{ my: 2, alignItems: 'center' }}>
            {' '}
            {t('page.settings.btn.save')}
          </Button>
        </Grid>
      </Card>
    </>
  );
}
