import React from 'react';
import p1 from './img/1.jpg';
import p2 from './img/2.jpg';
import p3 from './img/3.jpg';
import p4 from './img/4.jpg';

const Products = (props) => {
    return (
        <div className="homeproducts container-fluid">
            <h3>BEST SELLER</h3>
            <h5 style={{color:'#ecb620'}}>TOP PRODUCTS OF THIS WEEK</h5>
            <div className="row">
                <div className="col-md-6 col-lg-3 pr-two">
                    <img src={p1} alt="" />
                </div>
                <div className="col-md-6 col-lg-3 pr-two">
                    <img src={p2} alt="" />
                </div>
                <div className="col-md-6 col-lg-3 pr-two">
                    <img src={p3} alt="" />
                </div>
                <div className="col-md-6 col-lg-3 pr-two">
                    <img src={p4} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Products;
