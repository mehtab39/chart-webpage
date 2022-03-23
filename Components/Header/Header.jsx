import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Search from './Searchbar';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Header() {
  return (
      <>
    <Box sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <AppBar sx={{
              backgroundColor: "white",
              color: "black"
      }} position="static">
        <Toolbar sx={{fontSize: "bold"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {  sm: 'block' }, marginRight: '150px'}}
          >
            🔥 ThriveLIVE
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginRight: '200px', color:"#FFD700", fontWeight:"bold"}}
          >
            Overview
          </Typography>
       
       
          <Box sx={{ flexGrow: 4 }}/>
          <Box sx={{ display: {  md: 'flex' } }}>
          <Search/>
            <IconButton
              size="large"
              color="inherit"
            >
              <NotificationsIcon/>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="logout"
              color="inherit"
            >
              <LogoutIcon  />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }}/>
     
         <Avatar>RA</Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Ryan Azhari
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

