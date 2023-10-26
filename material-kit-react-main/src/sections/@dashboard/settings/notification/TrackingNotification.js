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
} from '@mui/material';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';
import * as React from 'react';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../../i18n';

const options = [i18next.t('page.settings.notifications.section.tracking.options.bystatus.ontransit'), i18next.t('page.settings.notifications.section.tracking.options.bystatus.delayed'), i18next.t('page.settings.notifications.section.tracking.options.bystatus.delivered'), i18next.t('page.settings.notifications.section.tracking.options.bystatus.cancelled'), i18next.t('page.settings.notifications.section.tracking.options.invoice.invoice')];

export default function TrackingNotification() {
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
    <Grid>
      <Stack direction="row" sx={{ gap: 2 }}>
        <Icon icon="ic:round-track-changes" width="32" height="32" />
        <Stack direction="row" alignItems="center" sx={{ gap: 2 }}>
          <Typography variant="h5">{t('page.settings.notifications.section.tracking.title')}</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography variant="p">{t('page.settings.notifications.section.tracking.text')}</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <FormControlLabel
          label={t('page.settings.notifications.section.tracking.options.all')}
          control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
        />
        <FormControl>
          <FormLabel>{t('page.settings.notifications.section.tracking.options.bystatus.title')}</FormLabel>
          <FormGroup>{listItem.slice(0, 4)}</FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>{t('page.settings.notifications.section.tracking.options.invoice.title')}</FormLabel>
          <FormGroup>{listItem.slice(4, 6)}</FormGroup>
        </FormControl>
      </Stack>
    </Grid>
  );
}
