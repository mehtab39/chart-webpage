import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {  categoriesStatistic as data } from '../../demodata';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import StyleIcon from '@mui/icons-material/Style';
import HomeIcon from '@mui/icons-material/Home';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
const icons = [<CheckroomIcon/>, <StyleIcon/>, <HomeIcon/>, <SportsHandballIcon/>,
   <FavoriteIcon/>,  <ChildFriendlyIcon/> ]
const colors = ["blue", "purple", "yellow", "green", "#FF5733", "skyblue"]
export default function Productcategories() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        { 
            data.map((el, i)=>{
                return  <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar sx={{color: colors[i]}}>
                    {icons[i]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={el.argument} secondary={el.items + " items"} />
                <ListItemAvatar>
                  <Avatar sx={{bgcolor: "white"}}>
                     <p style={{color: colors[i], fontWeight: "bold"}}>{el.value + "%"}</p>
                  </Avatar>
                </ListItemAvatar>
              </ListItem>
            })
        }
     
     
    </List>
  );
}
