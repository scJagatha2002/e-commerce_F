import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Login', 'Delivery Address', 'Order Summary','Payment'];

export default function Top() {
  const [activeStep, setActiveStep] = React.useState(2);
  

  const isStepOptional = (step) => {
    return step === 1;
  };

  

  

  return (
    <Box sx={{ width: '100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
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