import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ConfirmationDialog = ({ open, title, message, onConfirm, onCancel, hideActions }) => {
  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="confirm-dialog-title">
      <DialogTitle id="confirm-dialog-title" variant="h4">
        {title}
        <IconButton
          aria-label="close"
          onClick={onCancel}
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
        <DialogContentText variant="body1">{message}
        </DialogContentText>
      </DialogContent>
      {!hideActions && (
        <DialogActions>
          <Button onClick={onCancel} fullWidth variant="contained" color="primary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} fullWidth variant="contained" color="error">
            Confirmar
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ConfirmationDialog;
