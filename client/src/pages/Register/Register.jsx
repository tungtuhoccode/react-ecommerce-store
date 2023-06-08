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
import { CircularProgress } from '@mui/material';
import API_URL from "../../constant/routeConstants"
import { useNavigate } from 'react-router-dom';

import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';

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
      secondary:{
        main: "#111111"
      },
      success: {
        main: '#42ba96'
      },

    }
  }
);



export default function Register() {
    const [email, setemail] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("")
    const [isPasswordMatch, setIsPasswordMatch] = useState(passwordValue === confirmPasswordValue)
    const [isSubmittedEmpty, setIsSubmittedEmpty] = useState(false)
    const [isWaitingResult, setIsWaitingResult] = useState(false)
    const [isEmailALreadyInUse, setIsEmailALreadyInUse] = useState(false)

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

    const navigate = useNavigate()

    const handleClickShowPassword = () => {
      if (isShowPassword){
        setIsShowPassword(false)
      }else{
        setIsShowPassword(true)
      }
    }
    const handleClickShowConfirmPassword = () => {
      if (isShowConfirmPassword){
        setIsShowConfirmPassword(false)
      }else{
        setIsShowConfirmPassword(true)
      }
    }

    const handlePasswordChange = (event) => {
      setPasswordValue(event.target.value)
      if(isSubmittedEmpty && passwordValue !== "" && email !== "" && confirmPasswordValue !== ""){
        setIsSubmittedEmpty(false)
      }
    }

    const handleConfirmPasswordChange = (event) => {
      setConfirmPasswordValue(event.target.value)
      if(isSubmittedEmpty && passwordValue !== "" && email !== "" && confirmPasswordValue !== ""){
        setIsSubmittedEmpty(false)
      }
    }

    const handleEmailChange = (event) => {
      setemail(event.target.value)
      if(isSubmittedEmpty && passwordValue !== "" && email !== "" && confirmPasswordValue !== ""){
        setIsSubmittedEmpty(false)
      }
      if(isEmailALreadyInUse){
        setIsEmailALreadyInUse(false)
      }
  }

  const isEmailValid = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return emailRegex.test(email)
  }

    React.useEffect(()=>{
        setIsPasswordMatch(passwordValue === confirmPasswordValue)
    },[confirmPasswordValue, passwordValue])

    const fetchRegistrationData = async (emailIn, passwordIn) => {
      //fetch data to register in server
      const registrationURL = `${API_URL.REGISTER}`
      console.log(registrationURL)

      const response = await fetch(registrationURL, {
        method: 'POST', // Specify the HTTP method
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          email: emailIn, 
          password: passwordIn
        })
      })

      const data = await response.json()
      setIsWaitingResult(false)


      console.log(data)

      //successfully registered
      if(data.isSuccess){
          navigate("/login")
      }
      //if not successful
      else{
        setIsEmailALreadyInUse(true)
      }
    }

    const handleSubmit = (event) => {
      if(!email || !passwordValue || !confirmPasswordValue){
        setIsSubmittedEmpty(true)
        return 
      }

      if (isWaitingResult) {
        console.log("stop it")
        return 
      }
  
      if(!isPasswordMatch){
        return 
      }

      if(!isEmailValid(email)){
        return 
      }

      setIsWaitingResult(true)
      


      console.log("password:" + passwordValue)
      console.log("confirm password:" + confirmPasswordValue)
      console.log("Password match: "+ isPasswordMatch)

      //check with server
      fetchRegistrationData(email, passwordValue)
    };



  return (
    <ThemeProvider theme={theme}>
      <Container style={{ background: 'rgb(248, 247, 247)', borderRadius: "1%",}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            mb: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, mt: 5, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange ={(event) => handleEmailChange(event)}
              error= { function(email) {
                if(isEmailALreadyInUse){
                  return true
                }
                if(isSubmittedEmpty  && email === ""){
                  return true
                }

                return email === "" ? false : !isEmailValid(email)
              }(email)
              }
              helperText={ function(email) {
                if(isEmailALreadyInUse){
                  return "Email already in use. Please use another email address."
                }
                if (email === ""){
                  return ""
                }
                if (!isEmailValid(email) ){
                  return "You have entered an incorrect email address."
                }

                
                return ""
              }(email)}
              color={email === "" ? "primary": "success"}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={isShowPassword ? "text" : "password"}
              id="password"
              error={function(){
                if (isSubmittedEmpty && passwordValue === ""){
                  return true
                }
                
                return !isPasswordMatch
              }()
                
              }
              value = {passwordValue}
              color={passwordValue === "" ? "primary":"success"}
              onChange={ event => handlePasswordChange(event)}
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm password"
              type={isShowConfirmPassword ? "text" : "password"}
              id="confirm-password"
              error={function(){
                if (isSubmittedEmpty && confirmPasswordValue === ""){
                  return true
                }
                
                return !isPasswordMatch
              }()}

              helperText={function(){

                if (isSubmittedEmpty){
                  return "Please enter all required fields"
                }
                return isPasswordMatch ? "":"Password does not match"
              }()
              }
              InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowConfirmPassword()}
                    >
                      {isShowConfirmPassword ? <VisibilityOff/>: <Visibility /> }
                    </IconButton>
                  </InputAdornment>
                )
              }}

              value = {confirmPasswordValue}
              color={confirmPasswordValue === "" ? "primary":"success"}
              onChange={ event => handleConfirmPasswordChange(event)}
            />
            
              {/* {isPasswordMatch ? 
                  <Stack sx={{
                    mt: 1,
                    color: "green"
                  }} 
                  direction="row"
                   gap="10px">
                      <CheckIcon sx={{ strokeWidth: 1 }}/>
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
          
              } */}
          

            <Button
              onClick={() => {handleSubmit()}}
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3,
                mb: 2,
                opacity: isWaitingResult ? 0.7: 1,
                bgcolor: 'primary.lighter',
              }}
              
            >
              
              <Box sx ={{
                
                opacity: isWaitingResult ?  0.2 : 1
              }}>
                Sign Up 
              </Box>
              {isWaitingResult && <CircularProgress size= "20px" sx={{
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log in"}
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