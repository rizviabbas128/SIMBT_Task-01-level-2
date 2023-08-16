import React, { useEffect, useState } from 'react';
import {Box, TextField, Typography, Button} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isSignUp) {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("email",email);
      formData.append('password',password);

      const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        body: formData
      })
      const data = await response.json();
      setStatus(data.status);
      setMessage(data.message);
      toast.success(message);
    }else {
      const formData = new FormData();
      formData.append('email',email);
      formData.append('password', password);

      const response = await fetch('http://localhost:5000/user/login',{
        method: 'POST',
        body: formData
      })
      const data = await response.json();
      setToken(data.token);
      sessionStorage.setItem('token', token)
      setMessage(data.message);
    }
  }

  // useEffect(() => {
  //   if(status === 'success') {
  //     toast.success(message);
  //     setMessage("");
  //     setStatus("")
  //     return
  //   }else {
  //     toast.success(message);
  //     setMessage("");
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     return
  //   }
  // },[message])

  useEffect(() => {
    sessionStorage.setItem('token', token)
  },[token])

  useEffect(() => {
    if(token) {
      toast.success(message);
      navigate('/main');
      setMessage("");
      setEmail("")
      setPassword("")
    }else if(message !== "") {
      toast.success(message);
      navigate('/register')
      setMessage("");
      setEmail("")
      setPassword("")
    }
  },[message])

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
          boxShadow:'10px 10px 20px #ccc',
        }}}
        >
            <Typography variant='h3' padding={3} textAlign='center'>
               {isSignUp ? "Sign Up" : "Log In"}
            </Typography>
            {isSignUp && <TextField value={name} onChange={(e) => setName(e.target.value)} variant='outlined' placeholder='Name' type='text' margin='normal' />}
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' placeholder='Email' type='email' margin='normal' />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} variant='outlined' placeholder={isSignUp ? "Password length 6 - 12" : "Enter Password"} type='password' margin='normal' />
            <Button endIcon={isSignUp ? <HowToRegOutlinedIcon/> :<LoginOutlinedIcon/>} type='submit' variant='contained' sx={{marginTop: 3, marginBottom: 2, borderRadius: 1}}>{isSignUp ? "SignUp" : "LogIn"}</Button>
            <Button endIcon={isSignUp ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>} onClick={() => setIsSignUp(!isSignUp)} sx={{marginTop: 3, marginBottom: 2, borderRadius: 1}}>Change to {isSignUp ? "LogIn" : "SignUp"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth
