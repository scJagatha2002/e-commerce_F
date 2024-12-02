import CartItemCard from './CartItemCard.jsx';
import React, { useEffect, useState } from 'react';
import { api } from '../../../ApiConfig';


const CartItems = () => {
    const [cartData, setCartData] = useState(null);

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
    }, []); // Empty dependency array means the effect runs once after the initial render

    console.log(cartData);

    // Render only on the initial API call
    return (
        <div>
            {cartData?.cartItems?.map((item) => (
                <CartItemCard item={item} key={item.id} />
            ))}
        </div>
    );
};


export default CartItems;