import React from 'react';
import { api } from '../../../ApiConfig';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';

const CartItemCard = () => {
  const params = new useParams();
  const orderItemId = params.orderItemId;
  const [orderItem, setOrderItem] = useState();
  const fetchData = async () => {
    try {
      const response = await api.get(`/api/admin/orders/get/${orderItemId}`);
      setOrderItem(response.data);

    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {

    fetchData();
  }, [])

 

  return (
    <div className='border m-4 cm:w-11/12  shadow-2xl bg-gray-700 rounded-xl h-auto w-[20rem] flex cm:flex-row flex-col '>

      <div className=' w-[10rem] cm:m-10 mx-10 flex cm:flex-row flex-col '>
        <img className="object-cover object-center w-full h-full rounded-lg 
            " src={orderItem?.product?.image_URL} />
      </div>

      <div className='basis-1/2 cm:m-7 mx-7  cm:space-y-7 text-white'>
        <h2 className='w-fit cm:pb-3 text-left font-bold'>{orderItem?.product?.title}</h2>
        <p className='text-left space-x-10 cm:pb-3 pl-3'><span>{orderItem?.size}</span><span>{orderItem?.product?.color}</span></p>
        <p className="cm:pb-3 lowercase text-grey-900 space-x-3 text-left">
          <span>₹{orderItem?.discounted_price}</span>
          <span className='line-through'>₹{orderItem?.price}</span>

        </p>
      </div>
      <div className='basis-1/2 flex justify-center'>
        <div className='cm:my-24'>
          <a className='text-amber-600 space-x-3' href={`http://localhost:3000/feedback/${orderItem?.product?.id}`}>
            <StarIcon />Review And Ratings
          </a>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard;
