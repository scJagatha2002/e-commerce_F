import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../ApiConfig';
import { useEffect,useState } from 'react';
import { createPayment } from '../../../Redux/Payment/ActionCreator';


const Checkout = () => {
    const [cartData, setCartData] = useState(null);
    const [orderData, setOrderData] = useState(null);
    let Discount = 0;
    let TotalProductDiscountPrice = 0;
    let DeliveryCharge = 0;
    let TotalProductPrice = 0;
    let orderId = null;
    const dispatch = useDispatch();

    

   
    
    const fetchData = async () => {
        try {
            const response = await api.get('/api/cart/');
            setCartData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        
            fetchData();
    }, [])

    const fetchDatas = async () => {
        try {
            const response = await api.get('/api/admin/orders/?status=PENDING');
            setOrderData(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        
            fetchDatas();
    }, [])

    cartData?.cartItems?.forEach(item => {
        const product = item.product;
        
        Discount = Discount + ((product.price - product.discountedPrice) * item.quantity);
    });

    
    console.log("discount", Discount); 

    cartData?.cartItems?.forEach(item => {
        const product = item.product;
        TotalProductDiscountPrice = TotalProductDiscountPrice  + (product.discountedPrice*item.quantity);
    });
    //console.log("TotalDiscountPrice",TotalProductDiscountPrice);

    cartData?.cartItems?.forEach(item => {
        const product = item.product;
        TotalProductPrice = TotalProductPrice  + (product.price*item.quantity);
    });
    //console.log("TotalActualPrice",TotalProductPrice);

    if((TotalProductPrice - Discount)<=1000)
    {
        DeliveryCharge = cartData?.cartItems.reduce((acc,item) => acc+((item.quantity)*15),0);
    }
    else
    {
        DeliveryCharge = 0;
    }
    //console.log(orderData);
    const userId = cartData?.user?.id;

    //console.log(userId);

    orderData?.forEach(item => {
        const UserId = item.user.id;
        const OrderId = item.id;
        if(userId===UserId){
            orderId=OrderId;
        }
    });
    console.log(orderId);
    const handleBuy = () => {
        dispatch(createPayment(orderId));
    }
    
    return (
        <div className='border-2  shadow-2xl w-full mt-10 w-full h-auto p-5 bg-gray-700 rounded-xl text-white'>
            <h2 className='border-b-2  p-5 text-left w-full uppercase font-bold'>Price Details</h2>
            <div className='border-b-2 p-5 w-full'>
                <p className='flex justify-between p-2'><span>Price</span><span className='flex-end'>₹{TotalProductPrice}</span></p>
                <p className='flex justify-between p-2'><span>Discount</span><span className='text-green-600'>-₹{Discount}</span></p>
                <p className='flex justify-between p-2'><span>Delivery Charge</span><span>₹{DeliveryCharge}</span></p>
            </div>
            <h2 className=' p-5  flex justify-between w-full'><span>Total</span><span>₹{TotalProductPrice - Discount + DeliveryCharge}</span></h2>
            <a ><Button variant="contained" size="medium" color="secondary" onClick={() => handleBuy()}>Proceed To Buy</Button></a>
        </div>
    )
}

export default Checkout;