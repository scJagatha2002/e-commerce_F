import React from 'react';
import CartItemCard from './CartItemCard.jsx';
import { useParams } from 'react-router-dom';
import { findUserCart } from '../../../Redux/Cart/ActionCreator.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useRef } from 'react';
import { deleteCartItem } from '../../../Redux/Cart/ActionCreator.js';





const CartItems = () => {

    const params = useParams();
    const id = params.id;
    const { cart } = useSelector(store => store)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserCart());
    }, [id]);
    
    
    
    

    //console.log(cart);



    return (
        <div>
            {cart.cart?.cartItems?.map((item) =>  <CartItemCard item={item} />)}
        </div>
    )
}

export default CartItems;