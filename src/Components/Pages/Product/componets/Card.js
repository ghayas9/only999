import React from 'react';
import ReactStars from "react-rating-stars-component";




const Card = (props) => {

    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.image} className='col-12' style={{
                height:'auto',
                maxHeight:'250px',
                width:'auto',
                maxWidth:'100%',
                objectFit:'cover'
            }}/>
            <div className="tp-detail">
                <h6>{props.data.title}</h6>
                <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={24}
                isHalf={true}
                edit={false}
                value={props.data.rating.rate}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <h5>
                <span style={{
                    color:'red'
                }}>RS. {props.data.price}</span> {' '} <span style={{
                    textDecorationLine:'line-through'
                }}>RS.{props.data.price+100}</span>
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
