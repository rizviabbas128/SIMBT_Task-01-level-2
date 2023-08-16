import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import {Favorite, FavoriteBorder, MoreVert, Share} from '@mui/icons-material';

const Post = (item) => {
  const date = item?.item?.date?.split("T")
  return (
    <Card sx={{margin:5}}>
      <CardHeader avatar={<Avatar sx={{bgcolor: 'red'}}>A</Avatar>} action={<IconButton><MoreVert/></IconButton>} title="Abbas Rizvi" subheader={date[0]} />
      <CardMedia component='img' alt='Abbas Rizvi' height="20%" image={`http://localhost:5000/post/images/${item?.item?.image_file}`} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
       {item.item.caption}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>
        <IconButton>
          <Share/>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
