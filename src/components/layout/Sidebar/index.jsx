import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import { Dashboard as DashboardIcon, AccountCircle as AccountCircleIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

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
                    overflowX: 'hidden',
                    border: 'none'
                },
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '64px' }}>
                <IconButton onClick={toggleDrawer} sx={{ color: 'white', ml: 1.1 }}>
                    <MenuIcon />
                </IconButton>
            </div>
            <List >
                <ListItem button component={Link} to="/">
                    <ListItemIcon sx={{ color: 'white' }}>
                        <DashboardIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Dashboard" />}
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemIcon sx={{ color: 'white' }}>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Client" />}
                </ListItem>
            </List>
        </Drawer>
    )
}

export default Sidebar
