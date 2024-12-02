import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Placed', 'Order Confirmed', 'Shipped','Out For Delivery','Delivered'];

export default function Top() {
  const [activeStep, setActiveStep] = React.useState(1);
  

  

  

  

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