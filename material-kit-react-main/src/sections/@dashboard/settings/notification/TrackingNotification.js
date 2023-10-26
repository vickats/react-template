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

const options = ['On transit', 'Delayed', 'Delivered', 'Cancelled', 'Invoice upload'];

export default function TrackingNotification() {
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
          <Typography variant="h5">Tracking</Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography variant="p">Track your orders invoice and/or status</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 1 }} />
      <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '3rem' }}>
        <FormControlLabel
          label="All options"
          control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
        />
        <FormControl>
          <FormLabel>By Status</FormLabel>
          <FormGroup>{listItem.slice(0, 4)}</FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Invoice</FormLabel>
          <FormGroup>{listItem.slice(4, 6)}</FormGroup>
        </FormControl>
      </Stack>
    </Grid>
  );
}
