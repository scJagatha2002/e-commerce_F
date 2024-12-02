import React from 'react';
import NavigationBar from './NavigationBar.jsx';
import Footer from './footer.jsx';
import Stepper from './Stepper.jsx';
import AddressForm from './AddressForm.jsx'
import { useSelector } from 'react-redux';






const DeliveryPageMain = () => {
    
  
    return(
        <div className='bg-orange-100'>
            <NavigationBar/>
            <div className='m-4 overflow-auto'>
                <Stepper/>
            </div>
            <div className='m-8 '>
                <AddressForm/>
            </div>
            
            <Footer/>
            
        </div>
    )
}

export default DeliveryPageMain;