import React from 'react';
import Icons from '../../Icons/Icons';
import './Social.css';

const Social = () => {
    return (
        <div className="container-fluid">
            <div className="row social">
                <div className="col-lg-9 contact">
                <span >
                    <i className="fas fa-phone-alt"></i>
                    +92 343 6402064
                </span>
                <span >
                    <i className="far fa-clock"></i>
                    ALL WEEK FROM 9:00 AM TO 11:00 PM
                </span>
                </div>
                <div className="col-lg-3">
                    <Icons/>
                </div>
            </div>
        </div>
    );
}

export default Social;
