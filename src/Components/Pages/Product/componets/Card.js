import React from 'react';
import ReactStars from "react-rating-stars-component";

const Card = () => {
    const img='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    
    return (
        <div className="card">
            <img src={img} alt="" style={{
                width:'100%'
            }}/>
            <div className="tp-detail">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, libero.</h6>
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
            <h5>
                <span style={{
                    color:'red'
                }}>RS. {326}</span> {' '} <span style={{
                    textDecorationLine:'line-through'
                }}>RS.{5662}</span>
            </h5>
            <button className='btn' style={{
                backgroundColor:'#621940',
                color:'white',
                padding:'5px 20px'
            }}>
                ADD TO CARD
            </button>
            </div>
        </div>
    );
}

export default Card;
