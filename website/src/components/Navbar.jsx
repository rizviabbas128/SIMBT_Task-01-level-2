import { AppBar, Menu, Avatar, Box, Badge, styled, InputBase, Toolbar, Typography, MenuItem } from '@mui/material';
import {Mail, Notifications} from '@mui/icons-material';
import AbbasImage from '../image/Abbas_Photo.jpg'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const StyledToolBar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
  },
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (!token) {
      navigate("/")
    }
  }, [])
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
     <StyledToolBar>
     <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
        Abbas Website
      </Typography>
      <Search>
      <InputBase placeholder='search...'/>
      </Search>
     <Icons>
       <Badge badgeContent={4} color='error'><Mail/></Badge>
      <Badge badgeContent={6} color='error'><Notifications/></Badge>
      <Avatar src={AbbasImage} sx={{width:30, height:30}} onClick={(e) => setOpen(true)} />
     </Icons>
     </StyledToolBar>
     <Menu open={open} onClose={(e) => setOpen(false)} anchorOrigin={{vertical:"top",horizontal:'right'}} transformOrigin={{vertical:'top',horizontal:'right'}}>
      <MenuItem>Profile</MenuItem>
      {/* <MenuItem>My Account</MenuItem> */}
      <MenuItem onClick={() => {
        sessionStorage.removeItem('token')
        navigate('/')
        toast.success('Logout Successful')
        return
      }}>Logout</MenuItem>
     </Menu>
    </AppBar>
  )
}

export default Navbar
