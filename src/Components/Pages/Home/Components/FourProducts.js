import React from 'react';
import Products from './Product';
import ProductTitle from './ProductTitle';

const Fourproducts = () => {
    return (
       <div className="container-fluid" style={{
           margin:'10px 0px'
       }}>
           <ProductTitle title='BEST SELLER' subtitle='TOP PRODUCTS OF THIS WEEK'/>
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
