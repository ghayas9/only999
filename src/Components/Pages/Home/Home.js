import React from 'react';
import CarouselSlide from './Components/Carousel'
import Fourproducts from './Components/FourProducts';
import Products from './Components/Product';

import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <CarouselSlide/>
            {/* <Products/> */}
            <Fourproducts/>
            <Fourproducts/>
        </div>
    );
}

export default Home;
