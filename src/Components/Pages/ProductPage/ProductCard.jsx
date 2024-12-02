import React, { useEffect } from 'react';
import './ProductCard.css';
import { useDispatch,useSelector } from 'react-redux';
import { getProductById } from '../../../Redux/Product/ActionCreator';



const ProductCard = (props) => {
  
    return (
        <a href={`http://localhost:3000/productdetails/${props.Dresses.id}`}>

            <div className='cursor-pointer flex flex-col items-center bg-gray-700 rounded-lg shadow-md overflow-hidden w-[12rem] h-[23rem] m-5 border animation' id='animation'>


                <div className='h-[13rem] w-[10rem]'>
                    <img className="object-cover object-top w-full h-full" src={props.Dresses.image_URL} />
                </div>
                <div className="p-4 ">
                    <p className="text-base  capitalize text-grey-900 text-center font-bold text-white">{props.Dresses.brand}</p>
                    <p className="text-base  capitalize text-grey-900 text-center text-white">{props.Dresses.title}</p>
                    <p className="text-base  lowercase text-grey-900 space-x-3 text-white"><span>₹{props.Dresses.discountedPrice}</span><span className='line-through'>₹{props.Dresses.price}</span><span className='text-green-500'>{props.Dresses.discountedPercent}%</span></p>
                </div>
            </div>
        </a>
    )
}

export default ProductCard;