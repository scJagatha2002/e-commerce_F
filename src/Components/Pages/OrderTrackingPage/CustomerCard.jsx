import React from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../ApiConfig';
import { useEffect,useState } from 'react';


const CustomerCard = () => {
    const params = new useParams();
    const orderId = params.orderId;
    const [orders, setOrders] = useState();
    const fetchData = async () => {
        try {
          const response = await api.get(`/api/orders/${orderId}`);
          setOrders(response.data);
          
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };
      
      useEffect(() => {
    
        fetchData();
      }, [])
      

    return(
        <div className='border m-8 p-4 shadow-2xl bg-gray-700 text-white rounded-xl p-5'>
            <p className='text-left capitalize font-bold'>{orders?.shipping_address.firstName}</p>
            <p className='text-left'>{orders?.shipping_address.streetAddress}</p>
            <p className='text-left capitalize font-bold'>Phone Number</p>
            <p className='text-left'>{orders?.shipping_address.mobile}</p>
        </div>
    )
}

export default CustomerCard;