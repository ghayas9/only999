import React from 'react';
import CarouselSlide from './Components/Carousel'
import Products from './Components/Products';

import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <CarouselSlide/>
            <Products/>
        </div>
    );
}

export default Home;
