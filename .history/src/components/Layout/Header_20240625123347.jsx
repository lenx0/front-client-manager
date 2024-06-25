import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Badge, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <AppBar position="fixed">
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
          <Grid item xs={2}>
            <Typography variant="h6" noWrap>
              Logo
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
