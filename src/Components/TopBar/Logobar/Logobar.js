import React from 'react';
import { Link } from 'react-router-dom';
import './Logobar.css';

const Logobar = (props) => {

    return (
            <div className="row logobar " id='logobar'>
            <i className="fas fa-bars col-4 menu" onClick={()=>{props.setshow(!props.show)}}></i>
            <div className='col-lg-8 col-4 logo '> 
               <Link to='/'>
               <img src="https://cdn.shopify.com/s/files/1/0607/8618/0350/files/Logo_155x.png?v=1635777207" alt=""  />
               </Link>
            </div>
            <span className='col-4 uss'>
                <i className="fas fa-search"></i>
                <i className="fab fa-shopify"></i>
                <i className="fas fa-user hdn"></i>
                <i className="fas fa-sliders-h hdn"></i>
            </span>
        </div>
    );
}



export default Logobar;
