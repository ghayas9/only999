import React from 'react';

const Producttitle = (props) => {
    return (
        <div style={{
            textAlign:'center'
        }}>
            <h3 style={{
                fontWeight:'bold'
            }}>{props.title}</h3>
            <h6 style={{
                color:'#ecb620'
            }}>{props.subtitle}</h6>
        </div>
    );
}

export default Producttitle;
