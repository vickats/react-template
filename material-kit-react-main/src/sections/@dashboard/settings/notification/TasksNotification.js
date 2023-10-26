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

const options = ['2 days before', '5 days before', 'Open', 'Processing', 'Expired', 'Done'];

export default function TasksNotification() {
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
          <Typography variant="h5">Tasks</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
            <Typography variant="p">Receive the most important tasks updates, for you or your team</Typography>
            <RadioGroup
              name="radio-buttons-group"
              defaultValue="single-task"
              sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
            >
              <FormControlLabel control={<Radio />} value="single-task" label="Owned just by you" />
              <FormControlLabel control={<Radio />} value="team-task" label="Owned by your team" />
            </RadioGroup>
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ my: 1 }} />
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <FormControlLabel
          label="All options"
          control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
        />
        <FormControl>
          <FormLabel>Expiration</FormLabel>
          <FormGroup>{listItem.slice(0, 2)}</FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <FormGroup>{listItem.slice(2, 6)}</FormGroup>
        </FormControl>
      </Stack>
    </Grid>
  );
}
