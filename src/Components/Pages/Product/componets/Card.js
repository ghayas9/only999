import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const Card = (props) => {
    useEffect(() => {
        console.log(props.data)
        console.log(props.data.img)
        
    }, []);
    return (
        <Link to={`/singalproduct/${props.data._id}`} replace style={{
            textDecoration:'none',
            color:'black'
        }}>
        <div className="card"  >
            <img src={props.data.img[0]} alt={props.data.img} className='col-12' style={{
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
                value={5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <h5>
                <span style={{
                    color:'red'
                }}>RS. {props.data.price.price}</span> {' '} <span style={{
                    textDecorationLine:'line-through'
                }}>RS.{props.data.price.price+100}</span>
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
        </Link>
    );
}

export default Card;
