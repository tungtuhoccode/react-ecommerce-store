//REACT
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';

//MU
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


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';

//local 
import {setLogin} from "../../app/userSlice";
import API_URL from "../../constant/routeConstants"

//copyright props
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

//theme
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
  //react router dom
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  console.log('login status: ',isLoggedIn)

  //check if user is already logged to prevent double login
  useEffect(()=> {
    if(isLoggedIn) {
      console.log("already logged in")
      navigate('/account')
    }
  }, [isLoggedIn])

  //dynamic form data
  const [email, setEmail] = useState('tung1@gmail.com')
  const [password, setPassword] = useState('tungdeptrai')

  //validation state 
  const [isFailedLogin, setIsFailedLogin] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSubmitEmpty, setIsSubmitEmpty] = useState(false)

  //hide/show password
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setIsShowPassword(isShowPassword => !isShowPassword)
  }

  //email form validation
  const isEmailValid = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return emailRegex.test(email)
  }

  const login = async () => {
    if(!email || !password){
      setIsSubmitEmpty(true)
      return 
    }

    if (isProcessing) return
    if(!isEmailValid(email)) return

    sendLoginRequest(email, password)
  }

  useEffect(()=> {
    if(isSubmitEmpty){setIsSubmitEmpty(false)}
    if(isFailedLogin){setIsFailedLogin(false)}
  },[email, password])

  const sendLoginRequest = async (emailIn, passwordIn ) => {

  //server validation
    setIsProcessing(true)
    const loginUrl = `${API_URL.LOGIN}`

    const payload =  {
      method: 'POST', // Specify the HTTP method
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email: emailIn, 
        password: passwordIn
      })
      
    }

    const response = await fetch(loginUrl, payload)
    const data = await response.json()
    setIsProcessing(false)
    //after login request
    processAfterRequest(data) //return the data from the login request
  } 


  const processAfterRequest = async (data) => {
    console.log("process after request data",data)
    if(data.isLoggedIn){
      dispatch(setLogin(true))
      navigate("/account")
    }
    else{
      setIsFailedLogin(true)
    }
  }


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
          
{/* TOP SECTION */}
          <Avatar sx={{ m: 1, mt: 5, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box  sx={{ 
            mt: 1,
            }}>

{/* EMAIL */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              onChange={(event) => {
                setEmail(event.target.value)
                if(isFailedLogin){
                  setIsFailedLogin(false)
                }
              }}
              value={email}
              error={
                function() {
                  if (isSubmitEmpty) return true
                  if(isFailedLogin) return true
                  return email === "" ? false : !isEmailValid(email) || isFailedLogin
                }()
              }
              helperText={ function(email) {
                if (email === ""){
                  return ""
                }
                if (!isEmailValid(email) ){
                  return "You have entered an incorrect email address."
                }
                
                return ""
              }(email)}

              autoFocus
              color = {email === "" ? "primary":"success"}
            />

{/* PASSWORD */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"

              id="password"
              onChange={(event) => {
                setPassword(event.target.value)
                if(isFailedLogin){
                  setIsFailedLogin(false)
                }
              }}
              color={password === "" ? "primary":"success"}
              error= {
                function() {
                  if (isSubmitEmpty) return true
                  if(isFailedLogin) return true
                  if (password.length < 7 && password != "") return true
                  return false
                }()
              }
              helperText={
                function() {
                  if(isSubmitEmpty) return "Please enter all required fields"
                  if(password.length < 7 && password != "") return "Password must be at least 6 characters long"
                  return isFailedLogin ? "Wrong email or password, please try again.":""
                }()
              }
              value={password}
          
          //HIDE - SHOW 
              type={isShowPassword ? "text" : "password"}
              InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword()}
                    >
                      {isShowPassword ?<VisibilityOff />: <Visibility /> }
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

{/* REMEMBER ME */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

{/* SIGN IN */}
            <Button
              onClick={() => {login()}}
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3,
                mb: 2,
                opacity: isProcessing ? 0.7: 1,
                bgcolor: 'primary.lighter',
              }}
              
            >
              
              
              <Box sx ={{opacity: isProcessing ?  0.2 : 1,}}>
                    Log in 
              </Box>
              {isProcessing && <CircularProgress size= "20px" sx={{
                display:"block",
                position:"absolute",
                color: "white", 
                m: "auto",
              }}/>
              }

{/* FORGOT PASSWORD */}
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