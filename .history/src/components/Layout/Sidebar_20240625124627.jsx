import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon, Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 60, // Altera a largura do Drawer com base no estado 'open'
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60, // Largura do Drawer-paper ajustável
          boxSizing: 'border-box',
          bgcolor: 'primary.main', // Cor de fundo da sidebar
          color: 'white', // Cor dos textos na sidebar
        },
      }}
    >
      <IconButton onClick={toggleDrawer} sx={{ color: 'white', justifyContent: 'center' }}>
        <MenuIcon />
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
