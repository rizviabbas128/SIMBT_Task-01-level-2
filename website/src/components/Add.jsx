import React, { useState, useEffect } from 'react'
import { Tooltip, Fab, Box, Typography, Modal, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack,PersonAdd, DateRange} from '@mui/icons-material';
import AbbasIcon from '../image/Abbas_Photo.jpg';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const token = sessionStorage.getItem("token");
    const formData = new FormData();

    formData.append('caption',caption);
    formData.append('image_file', imageFile);

    const response  = await fetch('https://responsive-postify.onrender.com/post/add', {
      headers: {Authorization: token},
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    setMessage(data.message);
    toast.success('Post uploaded');
    window.location.reload();
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(!token) {
      navigate('/')
      toast.error('Please Login')
      return
    }else if(message === 'success') {
      navigate('/main')
      return
    }
  },[])

  return (
    <>
      <Tooltip onClick={(e) => setOpen(true)} title='Add Post' sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color='primary'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal open={open} onClose={(e) => setOpen(false)}>
        <Box sx={{backgroundColor: 'white',color: 'grey'}} width={400} height={280} bgcolor={'Background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant='h6' color='grey' >
            Create post
          </Typography>
          <UserBox>
            <Avatar src={AbbasIcon} sx={{ width: 30, height: 30 }} />
            <Typography>
              Abbas Rizvi
            </Typography>
          </UserBox>
          <TextField value={caption} onChange={(e) => setCaption(e.target.value)} sx={{ width: '100%' }} id="standard-multiline-static" multiline rows={3} placeholder="whats's on your mind?" variant='standard' />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary' />
            <TextField type='file'onChange={(e) => setImageFile(e.target.files[0])}/> 
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant='contained'>
            <Button onClick={handleSubmit}>Post</Button>
            <Button sx={{width: '100px'}}>
              <DateRange/>
            </Button>
          </ButtonGroup>
        </Box>
      </SytledModal>
    </>
  )
}

export default Add
