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
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';

import {setLogin} from "../../app/userSlice";

import API_URL from "../../constant/routeConstants"

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
        lighter:'#ab784b',
        // main: '#ab784b',
        // main:'#b88253'
      },

    }
  }
);

export default function LogIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  console.log('login status: ',isLoggedIn)

  useEffect(()=> {
    if(isLoggedIn) {
      console.log("already logged in")
      navigate('/account')
    }
  }, [isLoggedIn])

  

  const [email, setEmail] = useState('thu?@gmail.com')
  const [password, setPassword] = useState('thu?mups')
  const [isWaitingLogin, setIsWaitingLogin] = useState(false)


  const handleSubmit = (event) => {
    if (isWaitingLogin) {
      console.log("stop it")
      return }


    setIsWaitingLogin(true)


    const validateAccount = async (emailIn, passwordIn ) => {
      const loginUrl = `${API_URL.LOGIN}`
      const response = await fetch(loginUrl, {
        method: 'POST', // Specify the HTTP method
        headers: {'Content-Type':'application/json'},
			  credentials: 'include',
			  body: JSON.stringify({
          email: emailIn, 
          password: passwordIn
        })
      })
      const data = await response.json()
      setIsWaitingLogin(false)
      console.log("data isLoggedIn: ", data.isLoggedIn)
      if(data.isLoggedIn){
        dispatch(setLogin(true))
        navigate("/account")
      }
     
      console.log(data)
    }

    validateAccount(email, password)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container  
          style={{ 
            background: 'rgb(248, 247, 247)',
            borderRadius: "1%"
          ,}}  
          component="main" 
          maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
         
        >
          
          <Avatar sx={{ m: 1, mt: 5, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box  sx={{ 
            mt: 1,
            }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              onChange={(event) => {setEmail(event.target.value)}}
              value={email}
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
              onChange={(event) => {setPassword(event.target.value)}}
              value={password}
            />

              
            <FormControlLabel

              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />


            <Button
              onClick={() => {handleSubmit()}}
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3,
                mb: 2,
                opacity: isWaitingLogin ? 0.7: 1,
                bgcolor: 'primary.lighter',
              }}
              
            >
              {/* {!isWaitingLogin && "Sign in"} */}
              <Box sx ={{
                
                opacity: isWaitingLogin ?  0.2 : 1
              }}>
                Sign in 
              </Box>
              {isWaitingLogin && <CircularProgress size= "20px" sx={{
                display:"block",
                position:"absolute",
                color: "white", 
                ml: "auto",
                mr: "auto"
              }}/>
              }

            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{
                  color:'primary.main', 
                  textDecorationColor: "white",
                  '&:hover': {
                    textDecorationColor:"grey",
                 },
                  
                  }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" sx={{
                  color:'primary.main', 
                  textDecorationColor: "white",
                  '&:hover': {
                    textDecorationColor:"grey",
                 },
                  
                  }} >
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 5, mb: 4 }} />
       </Box>
       
      </Container>
    </ThemeProvider>
  );
}