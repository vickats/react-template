import {
  Stack,
  Grid,
  Typography,
  Switch,
  FormGroup,
  Divider,
  FormControlLabel,
  Checkbox,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as React from 'react';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';


const options = [
  i18next.t('page.settings.privacy.options.store'),
  i18next.t('page.settings.privacy.options.share'),
  i18next.t('page.settings.privacy.options.location'),
  i18next.t('page.settings.privacy.options.camera'),
  i18next.t('page.settings.privacy.options.mic'),
  i18next.t('page.settings.privacy.options.docs'),

];

export default function UserNotification() {
  const {t} = useTranslation();
  const [selected, setSelected] = useState([]);
  const isAllSelected = options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === 'all') {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    if (selected.indexOf(value) !== -1) {
      // if value already present
      const newSelected = selected.filter((s) => s !== value);
      setSelected(newSelected);
    } else {
      // if value not present
      setSelected([...selected, value]);
    }
  };

  const listItem = options.map((option) => {
    return (
      <FormControlLabel
        label={option}
        key={option}
        control={<Checkbox value={option} onChange={handleChange} checked={selected.includes(option)} />}
      />
    );
  });

  return (
    <Box>
      <Grid>
        <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
          <FormControlLabel
            label={t('page.settings.privacy.options.all')}
            control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
          />
          <FormControl>
            <FormGroup>{listItem}</FormGroup>
          </FormControl>
        </Stack>
      </Grid>
    </Box>
  );
}
