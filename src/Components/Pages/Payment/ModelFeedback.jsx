

import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Feedback from './Feedback';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function ModelLogin() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ textAlign:'center' , fontSize:'1.5rem', lineHeight:'2rem', color:'#111827', fontWeight:'700'}}>
            <Typography
              color="neutral"
              level="h3"
              variant="plain"
              sx={{ textAlign: 'center' }} // Use an object to define custom styles
            >
              Feedback
            </Typography>
          </Box>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Feedback />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}