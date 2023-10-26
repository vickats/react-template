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
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';
import * as React from 'react';

const options = [
  'Allow my information to be stored',
  'Allow my information to be shared with third-party partners',
  'Allow my location to be access when asked',
  'Allow my camera to be access when asked',
  'Allow my microphone to be access when asked',
  'Allow my documents/images to be access when asked',
];

export default function UserNotification() {
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
            label="All options"
            control={<Checkbox value="all" checked={isAllSelected} onChange={handleChange} />}
          />
          <FormControl>
            <FormGroup>{listItem}</FormGroup>
          </FormControl>
        </Stack>
      </Grid>
      <Grid sx={{ mt: 3 }}>
        <FormHelperText>
          Some information are managed by your company. To change it, contact your support.
        </FormHelperText>
        <Button variant="contained" type="submit" sx={{ my: 2 }}>
          {' '}
          Save
        </Button>
      </Grid>
    </Box>
  );
}
