import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Item,
  List,
  Container,
  FormControl,
  Typography,
  Input,
  Divider,
  FormHelperText,
  ListItem,
  ListItemText,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
// i18n
import { useTranslation, Trans } from 'react-i18next';
import i18next from '../../../i18n';
// components
import Iconify from '../../../components/iconify';


// ----------------------------------------------------------------------

export default function SignUpForm() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/login', { replace: true });
  };

  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneMobile, setPhoneMobile] = useState();
  const [country, setCountry] = useState();
  const [address, setAddress] = useState();
  const [complement, setComplement] = useState();
  const [subsidiary, setSubsidiary] = useState();
  const [jobPosition, setJobPosition] = useState();
  const [permission, setPermission] = useState();

  return (
    <>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, my: 2, width:'25ch' },
      }}
      noValidate={false}
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-required" variant="outlined" label={t('signup.form.name')} placeholder={t('signup.form.name')} value={name} defaultValue={name}/>

        <TextField id="outlined-required" variant="outlined" label={t('signup.form.lastname')}  placeholder={t('signup.form.lastname')} value={lastname} defaultValue={lastname} />

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
          placeholder={t('signup.form.phoneNumber')}
          label={t('signup.form.phoneNumber')}
          value={phoneNumber}
          defaultValue={phoneNumber}
        />
        <TextField
          type="number"
          id="outlined-required"
          variant="outlined"
          label={t('signup.form.phoneMobile')}
          placeholder={t('signup.form.phoneMobile')}
          value={phoneMobile}
          defaultValue={phoneMobile}
        />
      </div>
      <div>
        <TextField required id="outlined-required" variant="outlined" label={t('signup.form.country')} placeholder={t('signup.form.country')} value={country} defaultValue={country} />
        <TextField
          id="outlined-required"
          variant="outlined"
          label={t('signup.form.address')}
          placeholder={t('signup.form.address')}
          value={address}
          defaultValue={address}
        />
        <TextField id="outlined-required" variant="outlined" label={t('signup.form.complement')} placeholder={t('signup.form.complement')} value={complement} defaultValue={complement} />
      </div>
      <div>
        <TextField disabled id="outlined-required" variant="outlined" label={t('signup.form.subsidiary')} placeholder={t('signup.form.subsidiary')} value={subsidiary} defaultValue={subsidiary} />
        <TextField disabled id="outlined-required" variant="outlined" label={t('signup.form.position')} placeholder={t('signup.form.position')} value={jobPosition} defaultValue={jobPosition} />
      </div>
      <Stack sx={{m:1,my:2}}>
        <FormHelperText>{t('signup.form.helperText')}</FormHelperText>
      </Stack>
      <Divider sx={{m:1,my:2}}/>
      <div>
        <Stack sx={{m:1,mt:3}}>
          <Typography variant="h6">
          {t('signup.form.passwordTitle')}
          </Typography>
        </Stack>
        <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Stack sx={{m:1,my:2}}>
            <FormHelperText>
            {t('signup.form.passwordRules.text')}
            </FormHelperText>
            <List>
              <FormHelperText>
              {t('signup.form.passwordRules.rule1')}
              </FormHelperText>
              <FormHelperText>
              {t('signup.form.passwordRules.rule2')}
              </FormHelperText>
              <FormHelperText>
              {t('signup.form.passwordRules.rule3')}
              </FormHelperText>
              <FormHelperText>
              {t('signup.form.passwordRules.rule4')}
              </FormHelperText>
            </List>
          </Stack>
          <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <TextField
              name={t('signup.form.password')}
              label={t('signup.form.password')}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name={t('signup.form.confirmPassword')}
              label={t('signup.form.confirmPassword')}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
      </div>
    </Box>
    <Divider/>
    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      onClick={handleClick}
      sx={{ my: 4, maxWidth: '320px', alignSelf: 'center' }}
    >
      {t('signup.form.btn.register')}
    </LoadingButton>
    </>
  );
}
