import React, { useState } from 'react';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { api } from '../../../ApiConfig';
import { useEffect } from 'react';


const CustomerCard = () => {

    const [User,setUser] = useState();

    const fetchData = async () => {
        try {
            const response = await api.get('/api/cart/');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };

    useEffect(() => {
        
            fetchData();
    }, [])

    
    
    
    return(
        <div className='border m-8 p-4 shadow-2xl bg-gray-700 text-white rounded-xl p-5'>
            <p className='text-left capitalize font-bold'>{User?.user?.address[0]?.firstName}</p>
            <p className='text-left'>{User?.user?.address[0]?.streetAddress}</p>
            <p className='text-left capitalize font-bold'>Phone Number</p>
            <p className='text-left'>{User?.user?.address[0]?.mobile}</p>
        </div>
    )
}

export default CustomerCard;