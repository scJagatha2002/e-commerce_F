import React from 'react';
import NavigationBar from './NavigationBar.jsx';
import Footer from './footer.jsx';
import CustomerCard from './CustomerCard.jsx';
import Stepper from './Stepper.jsx';
import OrderItemCard from './OrderItemCard.jsx';
import { useSelector } from 'react-redux';

const OrderTrackingMain = () => {
    
    return(
        <div className='bg-orange-100'>
            <NavigationBar/>
            <div className='m-8 overflow-auto'>
            <Stepper/>
            </div>
            <CustomerCard/>
            <div>
            <OrderItemCard/>
            
            </div>
            <Footer/>
        </div>
    )
}

export default OrderTrackingMain;