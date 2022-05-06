import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from '../../../State/Actions/Actions'

const Products = (p) => {
    const [data, setdata] = useState([]);
    const state =useSelector(state=>state.Products)
    const dispatch = useDispatch()

    useEffect(async() => {
        setdata(await state);
    },[state,data]);

    return (
        <div className="container">
            {data.map((e,i)=>{
                return(
                    <h5 key={i}>
                        {e['_id']} {'=>'}
                        {e['price']['price']} 
                        <img src={e['img'][0]} style={{
                            width:'60px',
                            height:'60px'
                        }} alt="" />
                       
                    <button onClick={
                        (x)=>{
                            axios({
                                method:"delete",
                                url:`http://only999backend.herokuapp.com/DeleteProduct/${e['_id']}`,
                                
                              }).then((result)=>{
                                console.log(result)
                                dispatch(actionCreator.Reload())
                          })
                          .catch((err)=>{console.log(err)})
                        }
                    }>delete</button></h5>
                )
            })}
        </div>
    );
}

export default Products;
