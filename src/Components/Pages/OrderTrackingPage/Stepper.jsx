import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { api } from '../../../ApiConfig';

const steps = ['Placed', 'Order Confirmed', 'Shipped','Delivered','Cancelled'];

export default function Top() {
  const [activeStep, setActiveStep] = useState();
  const param = useParams();
  const id = param.orderId;
  const [status,setStatus] = useState();

  const fetchData = async () => {
   
    try {
        const response = await api.get(`/api/orders/${id}`);
        console.log(response.data?.orderStatus);
        setStatus(response.data?.orderStatus);
        if(status === "DELIVERED"){
          setActiveStep(3);
        }
        else if(status === "CONFIRMED"){
          setActiveStep(1);
        }
        else if(status === "SHIPPED"){
          setActiveStep(2);
        }
        else{
          setActiveStep(4);
        }

    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
};

useEffect(() => {
    fetchData();
},[status]);



  return (
    <Box sx={{ width: '100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
    </Box>
  );
}