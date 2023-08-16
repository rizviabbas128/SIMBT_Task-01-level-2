import React, { useEffect, useState } from 'react'
import { Box, Typography, AvatarGroup, List, ListItemText, Divider, ListItem, ListItemAvatar, Avatar,ImageList, ImageListItem } from '@mui/material'

const Rightbar = () => {
  const [rightData1, setRightData1] = useState([]);
  const [rightData2, setRightData2] = useState([]);
  const [rightData3, setRigthData3] = useState([]);
  const getData = () => {
    fetch('http://localhost:5000/post/all').then((res) => res.json()).
    then(data => {
      setRightData1(data.data[data.data.length-1])
      setRightData2(data.data[data.data.length-2])
      setRigthData3(data.data[data.data.length-3])
    }
    );
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <Box flex={2} p={2} sx={{display: {xs: 'none' ,sm: 'block'}}}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar src='https://material-ui.com/static/images/avatar/1.jpg' alt='ramy sharp' />
          <Avatar src='https://material-ui.com/static/images/avatar/2.jpg' alt='travis howard' />
          <Avatar src='https://material-ui.com/static/images/avatar/3.jpg' alt='cindy baker'/>
          <Avatar alt="Agnes Walker" src="" />
          <Avatar src='https://material-ui.com/static/images/avatar/4.jpg' alt='trevor handerson'/>
          <Avatar src='https://material-ui.com/static/images/avatar/5.jpg' alt='Abbas Rizvi'/>
          <Avatar src='https://material-ui.com/static/images/avatar/6.jpg' alt='Tahir Hussain'/>
          <Avatar src='https://material-ui.com/static/images/avatar/7.jpg' alt='Haider hussain'/>
          <Avatar src='https://material-ui.com/static/images/avatar/8.jpg' alt='Shiraz hussain'/>
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem>
            <img style={{borderRadius: '3px'}} src={`https://responsive-postify.onrender.com/post/images/${rightData1.image_file}`} alt='breakfast' />
          </ImageListItem>
          <ImageListItem>
            <img style={{borderRadius: '3px'}} src={`https://responsive-postify.onrender.com/post/images/${rightData2.image_file}`} alt='burger' />
          </ImageListItem>
          <ImageListItem>
            <img style={{borderRadius: '3px'}} src={`https://responsive-postify.onrender.com/post/images/${rightData3.image_file}`} alt='camera' />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
