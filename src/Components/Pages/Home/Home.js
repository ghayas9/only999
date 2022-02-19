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
            <Fourproducts title={'BEST SELLER'} subtitle={'TOP PRODUCTS OF THIS WEEK'}/>
            <Fourproducts title={'TRENDING'} subtitle={'TOP WISHES OF THIS WEEK'}/>
        </div>
    );
}

export default Home;
