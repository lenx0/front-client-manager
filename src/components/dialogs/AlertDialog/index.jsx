import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, Box, Typography, IconButton, DialogTitle } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
const AlertDialog = ({ open, title, message, onClose }) => {
    return (
        <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose} disableEscapeKeyDown={true} aria-labelledby="alert-dialog-title">
            <DialogTitle id="confirm-dialog-title" variant="h4">
                {title}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>{message}</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} fullWidth variant="contained" color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlertDialog
