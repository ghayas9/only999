import React from 'react';
import Card from './Card';

const Threeproduct = (props) => {
    
    return(
        <div className='col-4 three-product'>
        <Card data={props.data}/>
        </div>
    );
}

export default Threeproduct;
