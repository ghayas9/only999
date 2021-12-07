import React, { useState } from 'react';

const Morepages = (props) => {
    const [show, setshow] = useState(false);
    return (
        <>
        <h5 className='h'><span>{props.name}</span><i className={show?"fas fa-minus":"fas fa-plus"} onClick={()=>{setshow(!show)}}></i> </h5>
        <ul className={show?'show lg':'no lg'}>
            {props.comp}
        </ul>
        </>
    );
}

export default Morepages;
