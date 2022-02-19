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
            <div className='container-fluid'>
                <div className='row'>
                <div className="col-sm-12 col-md-6 col-lg-3" style={{
                    padding:'5px'
                }}>
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/products/WhatsAppImage2021-12-29at4.08.38PM_237x.jpg?v=1640784126" alt="" style={{
                            width:'100%',
                            height:'100%'
                        }}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" style={{
                    padding:'5px'
                }}>
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/products/WhatsAppImage2021-12-29at4.08.38PM_237x.jpg?v=1640784126" alt="" style={{
                            width:'100%',
                            height:'100%'
                        }}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" style={{
                    padding:'5px'
                }}>
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/products/WhatsAppImage2021-12-29at4.08.38PM_237x.jpg?v=1640784126" alt="" style={{
                            width:'100%',
                            height:'100%'
                        }}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" style={{
                    padding:'5px'
                }}>
                    <div className="card">
                        <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/products/WhatsAppImage2021-12-29at4.08.38PM_237x.jpg?v=1640784126" alt="" style={{
                            width:'100%',
                            height:'100%'
                        }}/>
                    </div>
                </div>
                </div>
            </div>
            <Fourproducts title={'TRENDING'} subtitle={'TOP WISHES OF THIS WEEK'}/>
        </div>
    );
}

export default Home;
