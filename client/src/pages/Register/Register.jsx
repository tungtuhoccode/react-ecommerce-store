import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/system';
import {useState} from 'react'
import { red } from '@mui/material/colors';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        3TStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#ad7646',
        // main: '#ab784b',
        // main:'#b88253'
      },

    }
  }
);

export default function Register() {
    const [passwordValue, setPasswordValue] = useState("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
    const [isPasswordMatch, setIsPasswordMatch] = useState(passwordValue === confirmPasswordValue)

    const handlePasswordChange = (event) => {
      setPasswordValue(event.target.value)
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPasswordValue(event.target.value)
    }



    React.useEffect(()=>{
        setIsPasswordMatch(passwordValue === confirmPasswordValue)

    },[confirmPasswordValue, passwordValue])

    console.log("password:" + passwordValue)
    console.log("confirm password:" + confirmPasswordValue)
    console.log("Password match: "+ isPasswordMatch)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ background: 'rgb(248, 247, 247)', borderRadius: "1%",}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, mt: 5, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value = {passwordValue}
              onChange={ event => handlePasswordChange(event)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm password"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              onChange={ event => handleConfirmPasswordChange(event)}
            />

            
              {isPasswordMatch ? 
                  <Stack sx={{
                    mt: 1,
                    color: "green"
                  }} 
                  direction="row"
                   gap="10px">
                      <CheckIcon/>
                      <Typography>Password match</Typography>
                  </Stack>
              
              :
                    <Stack
                    sx={{
                      mt: 1,
                      color: "red"
                    }} 
                      direction="row"
                      gap="10px">
                      <CloseIcon/>
                      <Typography>Password does not match</Typography>
                    </Stack>
          
              }
          

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 5, mb: 4}} />
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}