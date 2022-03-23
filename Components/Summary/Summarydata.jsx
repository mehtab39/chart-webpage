import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

export default function Summarydata() {
  return (
      <div style={{padding:'30px'}}>
      <h3>Summary Data</h3>
    <List sx={{  display: 'flex',
  flexDirection: 'row',
  padding: 0
 }}>
      <ListItem sx={{minWidth:'200px'}}>
        <ListItemAvatar >
          <Avatar sx={{backgroundColor: '#dda0dd'}}>
            <LocalAtmIcon sx={{color: 'purple'}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="$120" secondary="Income" />
      </ListItem>
      <ListItem sx={{minWidth:'200px'}}>
        <ListItemAvatar >
          <Avatar sx={{backgroundColor: '#87cefa'}}>
            <PersonIcon sx={{color: 'blue'}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="420" secondary="User Traffic" />
      </ListItem>
      <ListItem sx={{minWidth:'200px'}}>
        <ListItemAvatar  >
          <Avatar sx={{backgroundColor: '#ffffe0'}}>
            <LockIcon sx={{color: '#ffff00'}}  />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="72" secondary="Order Process" />
      </ListItem>
    </List>
    </div>
  );
}
