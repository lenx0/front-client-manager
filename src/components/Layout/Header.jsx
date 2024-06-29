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
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Box display="flex" gap={3} width="100%" justifyContent="end" alignContent="center" alignItems="center">
                    <Box backgroundColor="#bdbdbd" borderRadius="50%">
                        <IconButton color="inherit" >
                            <Badge
                                badgeContent={100}
                                color="error"
                                sx={{
                                    '& .MuiBadge-badge': {
                                        minWidth: '16px',
                                        height: '16px',
                                        fontSize: '10px',
                                        transform: 'translate(20px, -15px)'
                                    }
                                }}
                            >
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Avatar alt="User Avatar" src="/avatar.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
