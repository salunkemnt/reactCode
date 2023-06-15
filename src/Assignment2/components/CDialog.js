import React from 'react';
import { Dialog } from '@mui/material';

const CDialog = (props) => {
  const { children, open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};

export default CDialog;

