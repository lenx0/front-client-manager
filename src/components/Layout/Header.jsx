import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Badge, Avatar, Box, Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material'
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotifications } from '../../features/notifications/notificationsSlice'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const notifications = useSelector((state) => state.notifications.items)
  const dispatch = useDispatch()

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClearNotifications = () => {
    dispatch(clearNotifications())
    handleClose()
  }

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Box display="flex" gap={3} width="100%" justifyContent="end" alignContent="center" alignItems="center">
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge
              badgeContent={notifications.length}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="User Avatar" src="/avatar.jpg" />
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {notifications.map((notification, index) => (
            <MenuItem key={index}>
              <ListItemText
                primary={`Usuário ${notification.type}: ${notification.user.firstName} ${notification.user.lastName}`}
                secondary={new Date(notification.timestamp).toLocaleString()}
              />
            </MenuItem>
          ))}
          <MenuItem onClick={handleClearNotifications}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Clear Notifications" />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header
