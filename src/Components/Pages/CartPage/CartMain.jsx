import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './footer';
import CartItems from './CartItems.jsx';
import Checkout from './Checkout.jsx';
import { useSelector } from 'react-redux';


const CartMain = () => {
    
    return (
        <div>
            <NavigationBar />
            <div className='flex lg:flex-row flex-col  bg-orange-100'>
                <div className=' lg:basis-2/3 w-auto m-5 flex flex-col '>
                    <CartItems/>
                </div>
                <div className='basis-auto lg:w-1/4 m-10 '>
                    <Checkout/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartMain;