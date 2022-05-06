import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div style={{
            height:'100px',
            position:'relative'
        }}>
            <div class="loader" >
            <div class="inner one"></div>
            <div class="inner two"></div>
            <div class="inner three"></div>
            </div>
        </div>
        
    );
}

export default Loader;
