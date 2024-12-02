import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarousalCard from './CarousalCard';





const ProductListCarousal = (props) => {

    const responsive = {
        0: { items: 1 },
        568: { items: 3.5 },
        1404: { items: 5 },
    };
    console.log("j",props.Product)
    const items = props.Product?.slice(0,9).map((item) => <CarousalCard Product={item} Id={item.id}/>);

    return(

    
    <div className='border bg-gray-700 rounded-xl'>
        <div className='relative p-5 '>
            <h1 className='text-white cursor-pointer text-lg text-left mb-2'>{props.SectionName}</h1> 
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
            
            />
        </div>
    </div>
    )
};

export default ProductListCarousal;