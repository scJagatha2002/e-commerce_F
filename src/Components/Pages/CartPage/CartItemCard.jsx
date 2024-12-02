import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from '../../../Redux/Cart/ActionCreator';
import { updateCartItem } from '../../../Redux/Cart/ActionCreator';

const CartItemCard = (props) => {

    //const { cart } = useSelector(store => store);
    const dispatch = useDispatch();

    const RemoveCartItem = () => {
        
        const id = props.item.id;
        console.log(id);
        dispatch(deleteCartItem(id));
    }

    const handleIncrease = () => {
        
        const id = props.item.id;
        const data = {
            quantity : (props.item?.quantity+1)
        }
        dispatch(updateCartItem(id,data));
        console.log(props.item?.quantity);
    }

    const handleDecrease = () => {
        
        const id = props.item.id;
        const data = {
            quantity : (props.item?.quantity-1)
        }
        if(data.quantity===0){
            RemoveCartItem()
        }
        dispatch(updateCartItem(id,data));
        console.log(props.item?.quantity);
    }
    

    return (
        <div className='border shadow-2xl cm:w-full h-auto bg-gray-700 rounded-xl w-[20rem] m-4' >
            <div className='w-[10rem]  m-10 flex cm:flex-row  flex-col '>
                <img className="object-cover object-center w-full h-full rounded-lg 
            " src={props.item?.product?.image_URL} />
                <div className=' cm:w-96 p-3 w-fit text-white'>
                    <h2 className='w-fit cm:pb-3 text-left font-bold'>{props.item?.product?.title}</h2>
                    <p className='text-left space-x-10 cm:pb-3 pl-3'><span>{props.item?.size}</span><span>{props.item?.product?.color}</span></p>
                    <p className=" cm:pb-3 lowercase text-grey-900 space-x-3 text-left"><span>₹{props.item?.product?.discountedPrice}</span><span className='line-through'>₹{props.item?.product?.price}</span><span className='text-green-500'>{props.item?.product?.discountedPercent}% off</span></p>
                    <div className='flex flex-row space-x-5'><button><AddCircleIcon onClick={() => handleIncrease()} /></button><div className='border-2   cursor-auto w-14 rounded-cm'>{props.item?.quantity}</div><button><RemoveCircleIcon onClick={() => handleDecrease()} /></button><Button variant="contained" size="medium" color="secondary" onClick={() => {RemoveCartItem()}}>Remove</Button></div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard;
