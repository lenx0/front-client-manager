import React from 'react';
import { Drawer, Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1976d2',
        },
      }}
    >
      <List>
        <MenuIcon />
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
