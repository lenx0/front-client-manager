import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Badge, Avatar, Grid, Box, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <Grid container alignItems="center" m="0 3px 0 3px">
                    <Grid item xs={isMobile ? 1 : 1}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>

                    <Grid item xs={isMobile ? 8 : 9}>
                        <Box display="flex" justifyContent="end" alignItems="center">
                            <Box display="flex" alignItems="center">
                                <SearchIcon style={{ marginRight: '10px', marginLeft: '20px' }} />
                                <Box width={'100%'}>
                                    <InputBase
                                        placeholder="Search..."
                                        inputProps={{ 'aria-label': 'search' }}
                                        style={{ width: '100%', color: 'white', padding: '5px', border: '1px solid #d8d8d88d', borderRadius: '2px' }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={isMobile ? 1 : 1} sx={{ mr: 3 }}>
                        <IconButton color="inherit" >
                            <Badge badgeContent={4} color="error" >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item xs={isMobile ? 1 : 1}>
                        <Avatar alt="User Avatar" src="/avatar.jpg" />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
