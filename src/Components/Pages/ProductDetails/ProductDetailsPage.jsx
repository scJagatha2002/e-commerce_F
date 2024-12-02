import React from 'react';
import NavigationBar from '../HomePage/NavigationBar.jsx';
import ProductDetails from './ProductDetails.jsx';
import Footer from './footer.jsx';
import { useSelector } from 'react-redux';
const ProductDetailsPage = () => {
    
    
    return(
        <div className='bg-orange-100'>
            <NavigationBar/>
            <ProductDetails/>
            <Footer/>
        </div>
    )
}

export default ProductDetailsPage;