import React from 'react';
import ReactStars from "react-rating-stars-component";

const Oneproduct = () => {
    const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
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
                width:'100%'
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
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit</h6>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus, officiis maxime obcaecati similique temporibus culpa aperiam vitae consectetur impedit, tempore et asperiores ipsum rerum aut fugiat sequi animi. Unde?</p>
            </div>
            <div className="col-md-3" style={{
                alignItems:'center',
                display:'flex',
                flexDirection:'column'
            }}>
            <h1 style={{
                color:'red'
            }}>Rs:{3453.00}</h1>
            <h3 style={{
                textDecorationLine:'line-through'
            }}>Rs:{345674}</h3>
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
