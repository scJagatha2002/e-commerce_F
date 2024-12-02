import React from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';



const Checkout = () => {
    const { cart } = useSelector(store => store);
    const { order } = useSelector(store => store);
    let Discount = 0;
    let TotalProductDiscountPrice = 0;
    let DeliveryCharge = 0;
    let TotalProductPrice = 0;

    cart.cart?.cartItems?.forEach(item => {
        const product = item.product;
        Discount = Discount + ((product.price - product.discountedPrice)* item.quantity);
    });
    //console.log("serdtfgyuhi",cart);
    //console.log("TotalDiscount",Discount);

    cart.cart?.cartItems?.forEach(item => {
        const product = item.product;
        TotalProductDiscountPrice = TotalProductDiscountPrice  + (product.discountedPrice*item.quantity);
    });
    //console.log("TotalDiscountPrice",TotalProductDiscountPrice);

    cart.cart?.cartItems?.forEach(item => {
        const product = item.product;
        TotalProductPrice = TotalProductPrice  + (product.price*item.quantity);
    });
    //console.log("TotalActualPrice",TotalProductPrice);

    if((TotalProductPrice - Discount)<=1000)
    {
        DeliveryCharge = cart.cart?.cartItems.reduce((acc,item) => acc+((item.quantity)*15),0);
    }
    else
    {
        DeliveryCharge = 0;
    }
    //console.log("Delivery",DeliveryCharge);
    //const Discount = ActualPrice - DiscountedPrice;
    //const Total = (ActualPrice - Discount) + DeliveryCharge;
    
    /*if((ActualPrice - DiscountedPrice) >= 1000 ){
        cart.cart?.cartItems?.map(item => {
            const product = item.product;
            DeliveryCharge = DeliveryCharge + product.discountedPrice;
            console.log(product);
    
        });
    }*/

    

    return (
        <div className='border-2  shadow-2xl w-full mt-10 w-full h-auto p-5 bg-gray-700 rounded-xl text-white'>
            <h2 className='border-b-2  p-5 text-left w-full uppercase font-bold'>Price Details</h2>
            <div className='border-b-2 p-5 w-full'>
                <p className='flex justify-between p-2'><span>Price</span><span className='flex-end'>₹{TotalProductPrice}</span></p>
                <p className='flex justify-between p-2'><span>Discount</span><span className='text-green-600'>-₹{Discount}</span></p>
                <p className='flex justify-between p-2'><span>Delivery Charge</span><span>₹{DeliveryCharge}</span></p>
            </div>
            <h2 className=' p-5  flex justify-between w-full'><span>Total</span><span>₹{TotalProductPrice - Discount + DeliveryCharge}</span></h2>
            <a href="http://localhost:3000/delivery"><Button variant="contained" size="medium" color="secondary">Proceed To Buy</Button></a>
        </div>
    )
}

export default Checkout;