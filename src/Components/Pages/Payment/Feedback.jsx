import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
  const [value, setValue] = React.useState(2);
  console.log(value);
  const jwt = localStorage.getItem("jwt");
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const requestData = {
      rating: value,
      productId: id,
    };
  
    const requestData1 = {
      productId: id,
      review: document.getElementById("outlined-multiline-static").value,
    };
  
    try {
      const responseRating = await fetch('http://localhost:5454/api/rating/post', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      // Assuming the response doesn't need to be used immediately
      // If needed, handle the response data here
      
      const responseReview = await fetch('http://localhost:5454/api/review/post', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData1),
      });
  
      const data = await responseReview.json();
      console.log("Review post response:", data);
      navigate(-1);
    } catch (error) {
      // Handle any errors that might occur during the fetch requests
      console.error("Error:", error);
    }
  };
  

  return (
    <div>
      <form>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          
        />
      </Box>
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>

  );
}