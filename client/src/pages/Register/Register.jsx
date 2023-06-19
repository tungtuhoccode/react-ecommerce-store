//React
import {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import * as React from 'react';


//Material UI components
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CircularProgress } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import { IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



import API_URL from "../../constant/routeConstants"



//copyright icon
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



//REGISTER PAGE
export default function Register() {
    //form values
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    // validation booleans
    const [isPasswordMatch, setIsPasswordMatch] = useState(password === confirmPassword)
    const [isSubmitEmpty, setIsSubmitEmpty] = useState(false)
    const [isEmailALreadyInUse, setIsEmailALreadyInUse] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    
    //hide and show password
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

    const navigate = useNavigate()

    console.log("isProcessing:",isProcessing)
    
    //METHODS HANDLING FORM DATA
    const handleClickShowPassword = () => {
      if (isShowPassword) setIsShowPassword(false)
        setIsShowPassword(true)
    }
    const handleClickShowConfirmPassword = () => {
      if (isShowConfirmPassword) setIsShowConfirmPassword(false)
      setIsShowConfirmPassword(true)
    }

    const handlePasswordChange = (event) => {
      setpassword(event.target.value)
      if(isSubmitEmpty && password !== "" && email !== "" && confirmPassword !== ""){
        setIsSubmitEmpty(false)
      }
    }

    const handleConfirmPasswordChange = (event) => {
      setconfirmPassword(event.target.value)
      if(isSubmitEmpty && password !== "" && email !== "" && confirmPassword !== ""){
        setIsSubmitEmpty(false)
      }
    }

    const handleEmailChange = (event) => {
      setemail(event.target.value)
      if(isSubmitEmpty && password !== "" && email !== "" && confirmPassword !== ""){
        setIsSubmitEmpty(false)
      }
      if(isEmailALreadyInUse){
        setIsEmailALreadyInUse(false)
      }
  }

  const loadingAnimationOn = () => setIsProcessing(true)
  const loadingAnimationOff = () => setIsProcessing(false)
  //email validation
  const isEmailValid = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return emailRegex.test(email)
  }
  const validatePasswordLength = () => {
    return password.length >= 6
  }

    useEffect(()=>{
        setIsPasswordMatch(password === confirmPassword)
    },[confirmPassword, password])

    const PasswordErrorControl = () => {
      
    }

    //REGISTER WITH API
    const sendRegistrationData = async (emailIn, passwordIn) => {
      loadingAnimationOn()
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
      loadingAnimationOff()
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
      if (isProcessing) return 

      if(!email || !password || !confirmPassword){
        setIsSubmitEmpty(true)
        return 
      }

      if(!isPasswordMatch) return
      if(!isEmailValid(email))return 

      
      console.log("password:" + password)
      console.log("confirm password:" + confirmPassword)
      console.log("Password match: "+ isPasswordMatch)

      //check with server
      sendRegistrationData(email, password)
    };


  //JSX COMPONENT
  return (
    <ThemeProvider theme={theme}>
      <Container style={{ background: 'rgb(248, 247, 247)', borderRadius: "1%",}} component="main" maxWidth="xs">
        <CssBaseline />

{/* TOP SECTION */}
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

{   /* EMAIL */      }
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
                if(isEmailALreadyInUse) return true
                if(isSubmitEmpty  && email === "") return true
                return email === "" ? false : !isEmailValid(email)
              }(email)
              }
              helperText={ function(email) {
                if(email == "") return ""
                if(isEmailALreadyInUse) return "Email already in use. Please use another email address."
                if (!isEmailValid(email)) return "You have entered an incorrect email address."
                return ""
              }(email)}
              color={email === "" ? "primary": "success"}
            />

{   /* PASSWORD */      }
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"

              id="password"
              error={function(){
                if (password === "") return false
                if (!validatePasswordLength()) return true
                if (isSubmitEmpty && password === "") return true
                if(!isPasswordMatch && confirmPassword != "") return true
                return false
              }()}
              helperText = {(() => {
                if(password === "") return ""
                return "" 
              })()}

              // error= {function(){
              //   if (confirmPassword === "") return false
              //   if (isSubmitEmpty && confirmPassword === "") return true
              //   if (!validatePasswordLength()) return true
              //   return true
              // }()}
              value = {password}
              color={password === "" ? "primary":"success"}
              onChange={ event => handlePasswordChange(event)}
        
              // HIDE,SHOW 
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

{   /* CONFIRM PASSWORD */      }
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm password"
              id="confirm-password"
              
              error= {function(){
                if (confirmPassword === "" && password === "") return false
                if (isSubmitEmpty && confirmPassword === "") return true
                if (!validatePasswordLength()) return true
                if(!isPasswordMatch && password != "") return true
                return false
              }()}
              
              helperText = {(() => {
                if (confirmPassword === "" && password === "") return ""
                if (isSubmitEmpty) return "Please enter all required fields"
                if (!validatePasswordLength()) return "Password must be at least 6 characters long"
                return isPasswordMatch ? "":"Password does not match"
              })()}
              
          // HIDE - SHOW
              type={isShowConfirmPassword ? "text" : "password"}
              InputProps={{ // <-- Toogle button
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

              value = {confirmPassword}
              color={confirmPassword === "" ? "primary":"success"}
              onChange={ event => handleConfirmPasswordChange(event)}
            />
            
{/* SIGN UP BUTTON */}
            <Button
              onClick={() => {handleSubmit()}}
              fullWidth
              variant="contained"
              sx={{ 
                mt: 3,
                mb: 2,
                opacity: isProcessing ? 0.7: 1,
                bgcolor: 'primary.lighter',
              }}
              
            >
              <Box sx ={{ opacity: isProcessing ?  0.2 : 1}}>
                Sign Up 
              </Box>
              {isProcessing && <CircularProgress size= "20px" sx={{
                display:"block",
                position:"absolute",
                color: "white", 
                ml: "auto",
                mr: "auto"
              }}/>
              }

            </Button>
            
{/* FORGET PASSWORD */}
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