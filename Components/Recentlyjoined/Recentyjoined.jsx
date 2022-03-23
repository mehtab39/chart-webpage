import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
const data = {
    primary: 'Emily soup',
    secondary: 'Shopper'
}
export default function Recentlyjoined() {

  return (
      <div sx={{ margin: '30px' }}>
    <h3>Recently joined</h3> <br/>
    <List sx={{ bgcolor: 'background.paper' }}>
    { 
     new Array(5).fill("true").map($=>{
       return <ListItem  sx={{minWidth:'300px'}}>
        <ListItemText primary={data.primary} secondary={data.secondary} />
        <Button variant="contained" sx={{color:"#ffd700", fontWeight:'bold', bgcolor: '#ffffe0'}}>
        View
      </Button>
      </ListItem>
      })
    }
      
    </List>
    </div>
  );
}
