import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrderById } from '../../../Redux/Order/ActionCreator';
import { updataPayment } from '../../../Redux/Payment/ActionCreator';
import { Alert, AlertTitle } from '@mui/material';
import Stepper from './Stepper.jsx';
import OrderItemCard from './OrderItemCard.jsx';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../HomePage/NavigationBar.jsx';
import Footer from './footer.jsx';
const PaymentSuccess = () => {
    const [payment_Id,setPaymentId] = useState();
    const [referenceId,setReferenceId] = useState();
    const [paymentStatus,setPaymentStatus] = useState();
    const params = useParams();
    const order_Id = params.orderId;

    const dispatch = useDispatch();
    
    useEffect( () => {
        const urlParam = new URLSearchParams(window.location.search);
        //console.log("fghjkl",window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_linkId"));
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"));

    },[])

    useEffect ( () => {
        const data = {order_Id,payment_Id}
        console.log("fgh",data);
        dispatch(getOrderById(order_Id))
        dispatch(updataPayment(data))
    },[order_Id,payment_Id])

    return (
        <div className='px-2 bg-orange-100'>
            <NavigationBar/>
            <div className='flex flex-col justify-center items-center p-3'>
                <Alert variant='filled' severity='success' sx={{mb:6 , width:"fit-content"}}>
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order Get Placed
                </Alert>

            </div>
            <div className='overflow-auto'>
            <Stepper/>
            </div>
            <OrderItemCard/>
            <Footer/>
        </div>
       
    )
}

export default PaymentSuccess;