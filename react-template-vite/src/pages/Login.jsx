import {
  /* BrowserRouter, Routes, */ Link /*, Navigate*/,
} from "react-router-dom";

// import { useState } from "react";
import React from "react";

// Components
import {
  Button,
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Checkbox,
  FormControlLabel,
  // TextField,
  // FilledInput,
  // FormLabel,
  // FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//  CSS
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <h1>Login</h1> */}
      {/* <Link to="/home">
        <Button>Login</Button>
      </Link> */}
      {/* <Box
        sx={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
          margin: "auto",
        }}
      >
        <Stack direction="column" spacing={2}>
          <TextField label="Email" variant="outlined" />
          <TextField label="Password" variant="outlined" />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Button variant="contained" size="large" component={Link} to="/">
            Login
          </Button>
          <Button variant="text" component={Link} to="/signup">
            Sign Up
          </Button>
        </Stack>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: 480,
          minHeight: "100vh",
          margin: "auto",
        }}
      >
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput id="email" type="email" label="Email" />
        </FormControl>

        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 1, width: "100%" }}
        >
          <FormControlLabel
            sx={{ margin: 0 }}
            control={<Checkbox />}
            label="Remember me"
            name="remember"
          />
          <Link underline="hover">Forgot password ?</Link>
        </Stack>
        <Button
          sx={{ m: 1, width: "100%" }}
          size="large"
          variant="contained"
          type="submit"
          component={Link}
          to="/dashboard"
        >
          Login
        </Button>
      </Box>
    </>
  );
}
// export default Login;
