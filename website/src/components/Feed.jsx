import React, { useState, useEffect } from 'react'
import { Box, Stack, Skeleton } from '@mui/material';
import Post from './Post';
import Rightbar from './Rightbar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Feed = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState("");

  const getData = async () => {
    const token = sessionStorage.getItem('token');
    const response = await fetch('http://localhost:5000/post/all', {
      method: 'GET',
      headers: { Authorization: token },
    })
    const data = await response.json();
    setPost(data.data.reverse())
    setStatus(data.status)
  }

  useEffect(() => {
    getData();
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/')
      toast.error("Please Login")
      return
    }
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, [2000])
  return (
    <Box flex={4}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          {post.map((item, index) => {
            return (
              <Post item={item} index={index} />
            )
          })}
        </>
      )}
    </Box>
  )
}

export default Feed
