
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import p1 from './img/1.jpg';
import p2 from './img/2.jpg';
import p3 from './img/3.jpg';
import p4 from './img/4.jpg';

const CarouselSilde = () => {

    var slide=[{
        head:'Check Out',
        main:'Apperal Collections',
        foot:'You Better',
        img:p1,
        link:'/'
        
    },
    {
        head:'Get Your',
        main:'Home Decor',
        foot:'You Better',
        img:p2,
        link:'/'
    },
    {
        head:'Health & Beauty ',
        main:'So Visit Our Collections ',
        foot:'You Better',
        img:p3,
        link:'/'
    },
    {
        head:'Get All Your',
        main:'Party Decoration FulFilled',
        foot:'Form US',
        img:p4,
        link:'/'
    },
    
    
];
    return (
        <Carousel >
        
            {slide.map(
                (e)=>(CarouselItem(e.head,e.main,e.foot,e.img))
            )}
        </Carousel>
    );
}

function CarouselItem(head,main,foot,img){
    return(
        <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={img}
                alt={img}
                />
                <Carousel.Caption>
                    <div className="carousel-caption-card">
                    <h5 style={{
                        color:'#ecb620'
                    }}>{head}</h5>
                    <h3 style={{
                        color:'#621940'
                    }}>{main}</h3>
                    <h4 style={{
                        color:'#ecb620'
                    }}>{foot}</h4>
                    <button className='btn btn-warning'>SHOP NOW!</button>
                    </div>
        </Carousel.Caption>
        </Carousel.Item>
    );
}



export default CarouselSilde;
