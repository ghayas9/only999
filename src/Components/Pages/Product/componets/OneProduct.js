import React from 'react';
import ReactStars from "react-rating-stars-component";

const Oneproduct = (props) => {
    // const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    const id=props.data.id;
    const title=props.data.title;
    const price=props.data.price;
    const img=props.data.image;
    const des=props.data.description;
    return(
        <div className='col-12'>
            <div className="card" style={{
                margin:'10px'
            }}>
            <div className="row" style={{
                padding:'10px',
            }}>

            <div className="col-md-3  col-sm-12">
            <img src={img} alt="" style={{
                width:'100%',
            }}/>
            </div>
            <div className="col-md-6">
            
            <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
                edit={false}
                value={3.5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <h6>{title}</h6>
            <p >{des}</p>
            </div>
            <div className="col-md-3" style={{
                alignItems:'center',
                display:'flex',
                flexDirection:'column'
            }}>
            <h1 style={{
                color:'red'
            }}>Rs:{price}</h1>
            <h3 style={{
                textDecorationLine:'line-through'
            }}>Rs:{price+100}</h3>
            <button className='btn' style={{
                backgroundColor:'#621940',
                color:'white',
                padding:'5px 20px'
            }}>
                ADD TO CARD
            </button>
            <div className="pro-icn">
                <i className="far fa-eye"></i>
                <i className="fas fa-balance-scale"></i>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    );
}

export default Oneproduct;
