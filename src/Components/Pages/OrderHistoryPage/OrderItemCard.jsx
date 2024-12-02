import React from 'react';
import { api } from '../../../ApiConfig';
import { useEffect, useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';


const CartItemCard = (props) => {

 

  
  const orderId = props.order?.id;

    

  return (
    <div>
      {props.order?.orderList?.map((item) => (
        <a href={`http://localhost:3000/track/${item.id}/${orderId}`} key={item.id}>
          <div className='border cm:m-4 shadow-2xl cm:w-full h-auto bg-gray-700 rounded-xl w-[20rem]'>
            <div className='w-[10rem] cm:h-[12rem] m-10 flex cm:flex-row flex-col'>
              <img className="object-cover object-center w-full h-full rounded-lg" src={item.product.image_URL} />
              <div className='cm:w-96 cm:p-3 text-white'>
                <h2 className='cm:w-96 cm:pb-3 w-56 text-left font-bold'>{item.product.title}</h2>
                <p className='text-left space-x-10 cm:pb-3 pl-3'><span>{item.size}</span><span>{item.color}</span></p>
                <p className="cm:pb-3 lowercase text-grey-900 space-x-2 text-left">
                  <span>{`₹${item.discounted_price}`}</span>
                  <span className='line-through'>{`₹${item.price}`}</span>
                  <span className='text-green-500'>{`${item.product.discountedPercent}% off`}</span>
                </p>
                <div className='border-2 cursor-auto w-14 rounded-md'>{item.quantity}</div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CartItemCard;
