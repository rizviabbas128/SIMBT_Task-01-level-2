import React, { useState } from 'react';
import {Box, TextField, Typography, Button} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, email,password})
  }

  console.log(isSignUp)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        display='flex' 
        flexDirection={"column"} 
        maxWidth={400} 
        alignItems='center' 
        justifyContent='center' 
        margin='auto' 
        marginTop={5}
        padding={3}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{':hover': {
          boxShadow:'10px 10px 20px #ccc'
        }}}
        >
            <Typography variant='h3' padding={3} textAlign='center'>
               {isSignUp ? "Sign Up" : "Log In"}
            </Typography>
            {isSignUp && <TextField value={name} onChange={(e) => setName(e.target.value)} variant='outlined' placeholder='Name' type='text' margin='normal' />}
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' placeholder='Email' type='email' margin='normal' />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' placeholder='Password' type='password' margin='normal' />
            <Button endIcon={isSignUp ? <HowToRegOutlinedIcon/> :<LoginOutlinedIcon/>} type='submit' variant='contained' sx={{marginTop: 3, marginBottom: 2, borderRadius: 1}}>{isSignUp ? "SignUp" : "LogIn"}</Button>
            <Button endIcon={isSignUp ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>} onClick={() => setIsSignUp(!isSignUp)} sx={{marginTop: 3, marginBottom: 2, borderRadius: 1}}>Change to {isSignUp ? "LogIn" : "SignUp"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
