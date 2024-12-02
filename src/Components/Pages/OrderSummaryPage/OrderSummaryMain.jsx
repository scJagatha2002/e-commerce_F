import React from 'react';
import NavigationBar from './NavigationBar.jsx';
import Footer from './footer.jsx';
import Stepper from './Stepper.jsx'
import CustomerCard from './CustomerCard.jsx';
import CartItems from './CartItems.jsx';
import Checkout from './Checkout.jsx';
import { useSelector } from 'react-redux';

const OrderSummaryPage = () => {

    return(
        <div className='bg-orange-100'>
            <NavigationBar/>
            <div className='m-8 overflow-auto'>
                <Stepper/>
            </div>
            <CustomerCard/>
            <div className='m-5 flex lg:flex-row flex-col'>
                <div className=' lg:basis-2/3 w-auto m-5 flex flex-col'>
                    <CartItems/>
                </div>
                <div className='basis-auto lg:w-1/4 m-10'>
                    <Checkout/>
                </div>
            </div>
            <Footer/>    
        </div>
    )
}

export default OrderSummaryPage;
