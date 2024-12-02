import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { api } from '../../ApiConfig';

const options = ['confirmOrder', 'shipOrder' , 'deliverOrder' , 'cancelOrder'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open , } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  

  const handleListItemClick = (value,id) => {
    console.log("id",id);
      const updateData = async () => {
          try {
              const response = await api.put(`/api/admin/orders/${props.id}/${value}`);
              alert("Status Changed Successfully");
  
          } catch (error) {
              console.error('Error fetching cart data:', error);
          }
      }
      updateData();
  
    
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
     
      <List sx={{ pt: 0 , width: '200px' }}>
        {options.map((option) => (
          <ListItem disableGutters key={option}>
            <ListItemButton onClick={() => handleListItemClick(option,props.id)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <TaskAltIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option} />
            </ListItemButton>
          </ListItem>
        ))}
        
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ChangeStatus(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} color="primary">
        Status
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        id={props.id}
      />
    </div>
  );
}
