import React from 'react';
import './Product.css';
import { useState,useEffect } from 'react';
import OneProduct from './componets/OneProduct';
import TwoProduct from './componets/TwoProduct';
import ThreeProduct from './componets/ThreeProduct';
import FourProduct from './componets/FourProduct';
import Loader from '../../Loader/Loader'; 
import {useSelector } from 'react-redux';
const Product = () => {

    const [Grid, setGrid] = useState([false,false,true,false]);
    const [products, setproducts] = useState(null);
    const state = useSelector(state=>state.Products)
    useEffect(async() => {
        setproducts(await state)
    }, [state,products]);

    return (
        <>
        <div style={{
            backgroundColor:'sandybrown',
            margin:'10px 0px'
        }} className='container-fluid'>
            
        <ProducTopBar setGrid={setGrid} />
        </div>
        <div className="container-fluid">
            <div className="row">
                {
                   products? products.map((data,index)=>{
                    return(
                        Grid[0]?<OneProduct data={data} key={index}/>:
                        Grid[1]?<TwoProduct data={data} key={index}/>:
                        Grid[2]?<ThreeProduct data={data} key={index}/>:
                        Grid[3]?<FourProduct data={data} key={index}/>:null
                    )
                }):<Loader/>
                }
                
            </div>
        </div>
        </>
    );
}

function ProducTopBar(p){
    return(
        <>
        <div style={{
            padding:'20px'
        }}>
             {'Home'+' / '+"Sweatshirts"} 
        </div>
        {ProductPeader('Sweatshirts',20)}
        {grid (p.setGrid)}
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

function grid(setGrid){
    return(
        <div className='row grid'>
        <div className="col-6">
        <i class="fas fa-filter"></i>
        <span>FILTER</span>
        </div>
        <div className="col-6 fr">
            <i className="fas fa-square" onClick={()=>{setGrid([true,false,false,false])}}></i>
            <i className="fas fa-th-large" onClick={()=>{setGrid([false,true,false,false])}}></i>
            <i className="fas fa-th" onClick={()=>{setGrid([false,false,true,false])}}></i>
            <span onClick={()=>{setGrid([false,false,false,true])}}>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            <i className="fas fa-grip-vertical" style={{padding:'1px'}}></i>
            </span>
        </div>
    </div>
    );
}

export default Product;
