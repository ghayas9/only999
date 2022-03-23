import React ,{useEffect,useState}from 'react';
import axios from 'axios';


const Products = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getdata()
    },[]);

    function getdata(){
        fetch('http://localhost:3001/AllProducts').then((result)=>{
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
                    <h5>
                        {e['_id']} 
                        {e['price']} 
                         
                    
                    
                    <button onClick={
                        (x)=>{
                            axios({
                                method:"delete",
                                url:`http://localhost:3001/DeleteProduct/${e['_id']}`,
                                
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
