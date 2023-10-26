import { useState } from 'react';


import { Stack, Grid, Box, Container, TextField, Typography, Button, FormHelperText } from '@mui/material';

// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';

export default function AccountSettings() {

  const [name, setName] = useState("Name");
  const [lastname, setLastname] = useState("Lastname");
  const [id, setId] = useState("369852");
  const [email, setEmail] = useState("name@mail.com");
  const [phoneNumber, setPhoneNumber] = useState("551140526998");
  const [phoneMobile, setPhoneMobile] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [subsidiary, setSubsidiary] = useState("Cajamar");
  const [jobPosition, setJobPosition] = useState("Assistant");
  const [permission, setPermission] = useState("L1");

  const {t} = useTranslation();

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, my: 2, width: '30ch' },
      }}
      noValidate={false}
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.name')} placeholder={t('page.settings.myaccount.fields.name')} value={name} defaultValue={name}/>

        <TextField id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.lastname')}  placeholder={t('page.settings.myaccount.fields.lastname')} value={lastname} defaultValue={lastname} />

        <TextField
          type="number"
          required
          disabled
          id="outlined-required"
          variant="outlined"
          label="ID"
          value={id}
          defaultValue={id}
        />
      </div>
      <div>
        <TextField
          type="email"
          required
          id="outlined-required"
          variant="outlined"
          label="Email"
          value={email}
          defaultValue={email}
        />
        <TextField
          type="number"
          required
          id="outlined-required"
          variant="outlined"
          placeholder={t('page.settings.myaccount.fields.phoneNumber')}
          label={t('page.settings.myaccount.fields.phoneNumber')}
          value={phoneNumber}
          defaultValue={phoneNumber}
        />
        <TextField
          type="number"
          id="outlined-required"
          variant="outlined"
          label={t('page.settings.myaccount.fields.phoneMobile')}
          placeholder={t('page.settings.myaccount.fields.phoneMobile')}
          value={phoneMobile}
          defaultValue={phoneMobile}
        />
      </div>
      <div>
        <TextField required id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.country')} placeholder={t('page.settings.myaccount.fields.country')} value={country} defaultValue={country} />
        <TextField
          id="outlined-required"
          variant="outlined"
          label={t('page.settings.myaccount.fields.address')}
          placeholder={t('page.settings.myaccount.fields.address')}
          value={address}
          defaultValue={address}
        />
        <TextField id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.complement')} placeholder={t('page.settings.myaccount.fields.complement')} value={complement} defaultValue={complement} />
      </div>
      <div>
        <TextField disabled id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.subsidiary')} placeholder={t('page.settings.myaccount.fields.subsidiary')} value={subsidiary} defaultValue={subsidiary} />
        <TextField disabled id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.position')} placeholder={t('page.settings.myaccount.fields.position')} value={jobPosition} defaultValue={jobPosition} />
        <TextField disabled id="outlined-required" variant="outlined" label={t('page.settings.myaccount.fields.permission')} palceholder={t('page.settings.myaccount.fields.permission')} value={permission} defaultValue={permission} />
      </div>

      <div style={{ margin: 8 }}>
        <FormHelperText>
          {t('page.settings.helperText')}
        </FormHelperText>
        <Button variant="contained" type="submit" sx={{ my: 2 }}>
          {' '}
          {t('page.settings.btn.save')}
        </Button>
      </div>
    </Box>
  );
}
