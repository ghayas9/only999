import React ,{useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Silder = (p) => {
    useEffect(() => {
        console.log(p.slide)
    }, []);

    return (           
    <Carousel >
           {
               p.slide.map(
                   (e,i)=>{
                       return(
                           <Carousel.Item interval={3000}key={i}>
                           <img src={e} alt={e} />
                           <Carousel.Caption>
                               <div className="carousel-caption-card">
                               <h5 style={{
                                   color:'#ecb620'
                               }}>{'gggg'}</h5>
                               <button className='btn btn-warning'>SHOP NOW!</button>
                               </div>
                           </Carousel.Caption>
                   </Carousel.Item> 
                       )
                   }
               )
           }
       </Carousel>   
    );
}


export default Silder;
