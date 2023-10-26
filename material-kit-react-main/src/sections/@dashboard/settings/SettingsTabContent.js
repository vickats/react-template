import * as React from 'react'; 
import PropTypes from 'prop-types'; 

import { Box, Tab, Typography } from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';

import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import NotificationSettings from './NotificationSettings';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SettingsTabContent() {
  const {t} = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="basic tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <Tab label={t('page.settings.myaccount.tab')} {...tabProps(0)} />
          <Tab label={t('page.settings.notifications.tab')} {...tabProps(1)} />
          <Tab label={t('page.settings.privacy.tab')} {...tabProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <AccountSettings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <NotificationSettings />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PrivacySettings />
      </CustomTabPanel>
    </Box>
  );
}
