import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarousalData } from './CarousalData.js';

const Carousel = () => {
    const items = CarousalData.map((item) => (<img src={item.image} role="presentation" key={item.image} />));

    return (
        <div m-5 className='-z=40'>
            <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
        </div>
    );
};

export default Carousel;
