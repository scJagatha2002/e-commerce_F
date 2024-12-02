import React from 'react';
import { useState,useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { api } from '../../../ApiConfig';
import { useParams } from 'react-router-dom';


const CartItemCard = () => {

    const [User,setUser] = useState();
    const [orderItems,setOrderItems] = useState();
    const params = useParams();
    const order_Id = params.orderId;

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

    

    const fetchOrderData = async () => {
        try {
            const response = await api.get(`api/orders/${order_Id}`);
            setOrderItems(response.data);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };
    


    useEffect(() => {
        
            fetchOrderData();
    }, [])
    
    

    

    return (
        <>
          {orderItems?.orderList?.map((item) => (
            <div key={item.id} className='border m-4 cm:w-full  shadow-2xl bg-gray-700 rounded-xl h-auto w-[20rem] flex cm:flex-row flex-col '>
              
              <div className=' w-[10rem] m-10 flex cm:flex-row flex-col '>
                <img className="object-cover object-center w-full h-full rounded-lg 
            " src={item.product.image_URL} />
            </div>

              <div className='basis-1/2 m-7 cm:space-y-7 text-white'>
                <h2 className='w-fit cm:pb-3 text-left font-bold'>{item.product.title}</h2>
                <p className='text-left space-x-10 cm:pb-3 pl-3'><span>{item.size}</span><span>{item.color}</span></p>
                <p className="cm:pb-3 lowercase text-grey-900 space-x-3 text-left">
                  <span>₹{item.discounted_price}</span>
                  <span className='line-through'>₹{item.price}</span>
                  <span >Quantity = {item.quantity}</span>
                  
                </p>
              </div>
              <div className='basis-1/2 flex justify-center'>
                <div className='cm:my-24'>
                  <a className='text-amber-600 space-x-3' href={`http://localhost:3000/feedback/${item.product?.id}`}>
                    <StarIcon/>Review And Ratings
                  </a>
                </div>
              </div>
            </div>
          ))}
        </>
      );
      
}

export default CartItemCard;
