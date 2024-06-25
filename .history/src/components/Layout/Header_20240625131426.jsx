import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Badge, Avatar, Grid } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <SearchIcon style={{ marginRight: '10px' }} />
              <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={1}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <Avatar alt="User Avatar" src="/avatar.jpg" sx={{ ml: 2 }} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
