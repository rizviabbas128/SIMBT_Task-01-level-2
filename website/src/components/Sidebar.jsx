import React from 'react';
import {AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront} from '@mui/icons-material';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:'none' , sm:'block'}}}>
      <Box position='fixed'>
        <List>
          <ListItem>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href="#article">
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Articels" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component='a' href="#group">
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href='#person'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Person" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
