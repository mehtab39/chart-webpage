import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ForumIcon from '@mui/icons-material/Forum';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
const data = [
  { icon: <HomeIcon />, label: 'Overview' },
  { icon: <LockIcon />, label: 'Orders' },
  { icon: <PersonIcon />, label: 'Users' },
  { icon: <CategoryIcon />, label: 'Category' },
  { icon: <CreditCardIcon />, label: 'Finance' },
  { icon: <ForumIcon />, label: 'Feedback' },
  { icon: <VideoCameraFrontIcon  />, label: 'Live Video' },
  { icon: <HelpCenterIcon />, label: 'Help Center' },
];

const SideNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 34,
    paddingRight: 34,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex', marginTop: '10px' }}>
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <SideNav component="nav" disablePadding>
            <Box sx={{padding:'20px'}}>
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5
                }}
              >
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                 
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px'
                  }}
                  sx={{ my: 0 }}
                />
              </ListItemButton>
              {   data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 50 }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
                 <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5
                }}
              >
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                 
    
                  sx={{ my: 0 }}
                />
              </ListItemButton>
            </Box>
          </SideNav>
        </Paper>
    </Box>
  );
}
