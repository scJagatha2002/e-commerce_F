import React from 'react';
import NavigationBar from './NavigationBar.jsx';
import Footer from './footer.jsx';
import ProductCard from './ProductCard.jsx';
import Products from './Products.jsx';
import Dresses from '../../../Data/Dresses.js';
import LehanghaCholi from '../../../Data/LehanghaCholi.js';
import MensJeans from '../../../Data/MenJeans.js';
import { Outlet, Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Product = () => {
    
    
    const { auth,product,cart,order } = useSelector(store => store);
    console.log(product);
    console.log(cart);
    console.log(order);
    console.log(auth)
    return(
        <div>
            <NavigationBar/>
            <Products/>
            <Footer/>
            <Outlet/>
        </div>
    )
}

export default Product;