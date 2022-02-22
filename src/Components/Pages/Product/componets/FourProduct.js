import React from 'react';
import Card from './Card';

const Fourproduct = (props) => {
    return(
        <div className='col-3 four-product'>
           <Card data={props.data}/>
        </div>
    );
}

export default Fourproduct;
