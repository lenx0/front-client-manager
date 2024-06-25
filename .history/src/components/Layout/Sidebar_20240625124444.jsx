import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Avatar } from '@mui/material';
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon, Notifications as NotificationsIcon, Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: 'primary.main', // Cor de fundo da sidebar
          color: 'white', // Cor dos textos na sidebar
        },
      }}
      open={open}
    >
      <IconButton onClick={toggleDrawer} sx={{ color: 'white', justifyContent: 'flex-start' }}>
        {open ? <MenuIcon /> : <MenuIcon />}
      </IconButton>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Profile" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
