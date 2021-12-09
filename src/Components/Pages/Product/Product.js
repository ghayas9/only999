import React from 'react';
import './Product.css';

const Product = () => {
    return (
        <div style={{
            backgroundColor:'sandybrown'
        }} className='container-fluid'>
        {ProducTopBar()}
        </div>
    );
}

function ProducTopBar(){
    return(
        <>
        <div style={{
            padding:'20px'
        }}>
             {'Home'+' / '+"Sweatshirts"} 
        </div>
        {ProductPeader('Sweatshirts',20)}
        {grid()}
        
        </>
    )
}

function ProductPeader(name,total){
    return (
        <div className="productheader" style={{
            textAlign:'center',
            fontSize:'20px',
            fontWeight:'bolder'
        }}>
                {name} ({total})
        </div>
    );
}

function grid(){
    return(
        <div className='row grid'>
        <div className="col-6">
        <i class="fas fa-filter"></i>
        <span>FILTER</span>
        </div>
        <div className="col-6 fr">
            <i className="fas fa-square"></i>
            <i className="fas fa-th-large"></i>
            <i className="fas fa-th"></i>
            <span>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            </span>
            

        </div>
    </div>
    );
}
export default Product;
