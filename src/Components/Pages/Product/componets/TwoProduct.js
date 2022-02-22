import React from 'react';
import Card from './Card';

const Twoproduct = (props) => {
    return(
        <div className='col-6 two-product'>
            <Card data={props.data}/>
        </div>
    );
}
export default Twoproduct;
