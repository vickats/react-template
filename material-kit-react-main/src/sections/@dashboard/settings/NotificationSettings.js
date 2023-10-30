import {
  Stack,
  Grid,
  Box,
  Container,
  TextField,
  Typography,
  Button,
  FormLabel,
  FormHelperText,
  Switch,
  FormGroup,
  Divider,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
} from '@mui/material';

// import { green } from '@mui/material/colors';
// import Iconify from '../../../components/iconify';
import { Icon } from '@iconify/react';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';

// Content
import WhereToNotify from './notification/WhereToNotify';
import TasksNotification from './notification/TasksNotification';
import TrackingNotification from './notification/TrackingNotification';
import UserNotification from './notification/UserNotification';

export default function NotificationSettings() {

  const {t} = useTranslation();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, my: 2, width: '30ch' },
        gap: 6,
        flexDirection: 'column',
        display: 'flex',
      }}
      noValidate={false}
      autoComplete="off"
    >
      <Grid>
        <WhereToNotify />
      </Grid>
      <Grid>
        <TasksNotification />
      </Grid>
      <Grid>
        <TrackingNotification />
      </Grid>
      <Grid>
        <UserNotification />
      </Grid>
    </Box>
  );
}
