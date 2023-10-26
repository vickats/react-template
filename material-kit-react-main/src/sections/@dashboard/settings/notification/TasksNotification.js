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

const options = [i18next.t('page.settings.notifications.section.tasks.options.expiration.twodays'), i18next.t('page.settings.notifications.section.tasks.options.expiration.fivedays'), i18next.t('page.settings.notifications.section.tasks.options.status.open'), i18next.t('page.settings.notifications.section.tasks.options.status.processing'), i18next.t('page.settings.notifications.section.tasks.options.status.expired'), i18next.t('page.settings.notifications.section.tasks.options.status.done')];

export default function TasksNotification() {
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
        <Icon icon="fe:list-task" width="32" height="32" />
        <Stack direction="row" alignItems="center" sx={{ gap: 2, width: '100%' }}>
          <Typography variant="h5">{t('page.settings.notifications.section.tasks.title')}</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Typography variant="p">{t('page.settings.notifications.section.tasks.text')}</Typography>
            <RadioGroup
              name="radio-buttons-group"
              sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
            >
              <FormControlLabel control={<Radio />} value="single-task" label={t('page.settings.notifications.section.tasks.options.owner.you')} />
              <FormControlLabel control={<Radio />} value="team-task" label={t('page.settings.notifications.section.tasks.options.owner.you')} />
            </RadioGroup>
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ my: 1 }} />
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <FormControlLabel
          label={t('page.settings.notifications.section.tasks.options.all')}
          control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
        />
        <FormControl>
          <FormLabel>{t('page.settings.notifications.section.tasks.options.expiration.title')}</FormLabel>
          <FormGroup>{listItem.slice(0, 2)}</FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>{t('page.settings.notifications.section.tasks.options.status.title')}</FormLabel>
          <FormGroup>{listItem.slice(2, 6)}</FormGroup>
        </FormControl>
      </Stack>
    </Grid>
  );
}
