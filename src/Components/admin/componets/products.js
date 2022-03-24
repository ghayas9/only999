import React ,{useEffect,useState}from 'react';
import axios from 'axios';


const Products = (p) => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getdata()
    },[]);

    function getdata(){
        fetch('http://only999backend.herokuapp.com/AllProducts').then((result)=>{
        result.json().then((res)=>{
        setdata(res);
        console.log(data);
  })
  }).catch((err)=>{console.log(err)})
            
    }
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
                                getdata()
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
