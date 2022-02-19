import React from 'react';
import Products from './Product';
import ProductTitle from './ProductTitle';

const Fourproducts = (p) => {
    return (
       <div className="container-fluid" style={{
           margin:'10px 0px'
       }}>
           <ProductTitle title={p.title} subtitle={p.subtitle}/>
           <div className="row">
                <Products/>
                <Products/>
                <Products/>
                <Products/>
           </div>
       </div>
    );
}

export default Fourproducts;
