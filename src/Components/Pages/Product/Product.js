import React from 'react';
import './Product.css';
import { useState,useEffect } from 'react';
import OneProduct from './componets/OneProduct';
import TwoProduct from './componets/TwoProduct';
import ThreeProduct from './componets/ThreeProduct';
import FourProduct from './componets/FourProduct';
const Product = () => {

    const [Grid, setGrid] = useState([false,false,true,false]);
    const [products, setproducts] = useState([]);
    useEffect(() => {
        for(var i=0;i<100;i++){
            setproducts(products => [...products,i])
        }
    }, []);

    
    return (
        <>
        <div style={{
            backgroundColor:'sandybrown',
            margin:'10px 0px'
        }} className='container-fluid'>
            
        <ProducTopBar setGrid={setGrid} />
        </div>
        <div className="container-fluid">
            <div className="row">
                {
                    products.map(()=>{
                        return(
                            Grid[0]?<OneProduct/>:
                            Grid[1]?<TwoProduct/>:
                            Grid[2]?<ThreeProduct/>:
                            Grid[3]?<FourProduct/>:null
                        )
                    })
                }
                
            </div>
        </div>
        </>
    );
}

function ProducTopBar(p){
    return(
        <>
        <div style={{
            padding:'20px'
        }}>
             {'Home'+' / '+"Sweatshirts"} 
        </div>
        {ProductPeader('Sweatshirts',20)}
        {grid (p.setGrid)}
        </>
    )
}

function ProductPeader(name,total){
    return (
        <div className="productheader" style={{
            textAlign:'center',
            fontSize:'20px',
            fontWeight:'bolder'
        }}>
                {name} ({total})
        </div>
    );
}

function grid(setGrid){
    return(
        <div className='row grid'>
        <div className="col-6">
        <i class="fas fa-filter"></i>
        <span>FILTER</span>
        </div>
        <div className="col-6 fr">
            <i className="fas fa-square" onClick={()=>{setGrid([true,false,false,false])}}></i>
            <i className="fas fa-th-large" onClick={()=>{setGrid([false,true,false,false])}}></i>
            <i className="fas fa-th" onClick={()=>{setGrid([false,false,true,false])}}></i>
            <span onClick={()=>{setGrid([false,false,false,true])}}>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            </span>
        </div>
    </div>
    );
}

// function OneProduct(){
//     const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
//     return(
//         <div className='col-12 row'>
//             <div className="col-md-3 col-6" style={{
//                 margin:'2px 0px',
//                 padding:'0px'
//             }}>
//             <img src={img} alt="" style={{
//                 width:'100%'
//             }}/>
//             </div>
//             <div className="col-6">
//             <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, consequuntur.</h6>
//             <ReactStars
//                 count={5}
//                 // onChange={ratingChanged}
//                 size={24}
//                 isHalf={true}
//                 edit={false}
//                 value={3.5}
//                 emptyIcon={<i className="far fa-star"></i>}
//                 halfIcon={<i className="fa fa-star-half-alt"></i>}
//                 fullIcon={<i className="fa fa-star"></i>}
//                 activeColor="#ffd700"
//             />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus, officiis maxime obcaecati similique temporibus culpa aperiam vitae consectetur impedit, tempore et asperiores ipsum rerum aut fugiat sequi animi. Unde?</p>
//             </div>
//             <div className="col-md-3" style={{
//                 alignItems:'center',
//                 display:'flex',
//                 flexDirection:'column'
//             }}>
//             <h1 style={{
//                 color:'red'
//             }}>Rs:{3453.00}</h1>
//             <h3 style={{
//                 textDecorationLine:'line-through'
//             }}>Rs:{345674}</h3>
//             <button className='btn' style={{
//                 backgroundColor:'#621940',
//                 color:'white',
//                 padding:'5px 20px'
//             }}>
//                 ADD TO CARD
//             </button>
//             <div className="pro-icn">
//                 <i className="far fa-eye"></i>
//                 <i className="fas fa-balance-scale"></i>
//             </div>
//             </div>
            
//         </div>
//     );
// }

// function TwoProduct(){
//     const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    
//     return(
//         <div className='col-6' style={{
            
//         }}>
//             <img src={img} alt="" style={{
//                 width:'100%'
//             }}/>
//             <div className="tp-detail">
//                 <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero.</h6>
//                 <ReactStars
//                 count={5}
//                 // onChange={ratingChanged}
//                 size={24}
//                 isHalf={true}
//                 edit={false}
//                 value={3.5}
//                 emptyIcon={<i className="far fa-star"></i>}
//                 halfIcon={<i className="fa fa-star-half-alt"></i>}
//                 fullIcon={<i className="fa fa-star"></i>}
//                 activeColor="#ffd700"
//             />
//             <h5>
//                 <span style={{
//                     color:'red'
//                 }}>RS. {326}</span> {' '} <span style={{
//                     textDecorationLine:'line-through'
//                 }}>RS.{5662}</span>
//             </h5>
//             <button className='btn' style={{
//                 backgroundColor:'#621940',
//                 color:'white',
//                 padding:'5px 20px'
//             }}>
//                 ADD TO CARD
//             </button>
//             </div>
//         </div>
//     );
// }

// function ThreeProduct(){
//     const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    
//     return(
//         <div className='col-4' style={{
            
//         }}>
//             <img src={img} alt="" style={{
//                 width:'100%'
//             }}/>
//             <div className="tp-detail">
//                 <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero.</h6>
//                 <ReactStars
//                 count={5}
//                 // onChange={ratingChanged}
//                 size={24}
//                 isHalf={true}
//                 edit={false}
//                 value={3.5}
//                 emptyIcon={<i className="far fa-star"></i>}
//                 halfIcon={<i className="fa fa-star-half-alt"></i>}
//                 fullIcon={<i className="fa fa-star"></i>}
//                 activeColor="#ffd700"
//             />
//             <h5>
//                 <span style={{
//                     color:'red'
//                 }}>RS. {326}</span> {' '} <span style={{
//                     textDecorationLine:'line-through'
//                 }}>RS.{5662}</span>
//             </h5>
//             <button className='btn' style={{
//                 backgroundColor:'#621940',
//                 color:'white',
//                 padding:'5px 20px'
//             }}>
//                 ADD TO CARD
//             </button>
//             </div>
//         </div>
//     );
// }
// function FourProduct(){
//     const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    
//     return(
//         <div className='col-3' style={{
            
//         }}>
//             <img src={img} alt="" style={{
//                 width:'100%'
//             }}/>
//             <div className="tp-detail">
//                 <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero.</h6>
//                 <ReactStars
//                 count={5}
//                 // onChange={ratingChanged}
//                 size={24}
//                 isHalf={true}
//                 edit={false}
//                 value={3.5}
//                 emptyIcon={<i className="far fa-star"></i>}
//                 halfIcon={<i className="fa fa-star-half-alt"></i>}
//                 fullIcon={<i className="fa fa-star"></i>}
//                 activeColor="#ffd700"
//             />
//             <h5>
//                 <span style={{
//                     color:'red'
//                 }}>RS. {326}</span> {' '} <span style={{
//                     textDecorationLine:'line-through'
//                 }}>RS.{5662}</span>
//             </h5>
//             <button className='btn' style={{
//                 backgroundColor:'#621940',
//                 color:'white',
//                 padding:'5px 20px'
//             }}>
//                 ADD TO CARD
//             </button>
//             </div>
//         </div>
//     );
// }

export default Product;
