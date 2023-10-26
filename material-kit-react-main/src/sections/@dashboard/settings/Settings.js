import { Card, TextField, Stack, Box } from '@mui/material';
import SettingsTabContent from './SettingsTabContent';

export default function Settings() {
  return (
    <>
      <Card sx={{ p: 3 }}>
        <SettingsTabContent />
      </Card>
    </>
  );
}
