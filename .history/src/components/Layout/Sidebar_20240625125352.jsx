import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon, Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = () => {
    setOpen(true); // Expande o Drawer ao clicar em qualquer item da lista
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease-in-out',
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px' }}>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <MenuIcon />
        </IconButton>
      </div>
      <List>
        <ListItem button onClick={handleListItemClick}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>
        <ListItem button onClick={handleListItemClick}>
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
