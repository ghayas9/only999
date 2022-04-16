import React ,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Silder from './components/silder';

const Singalproducts = () => {
    let { id } = useParams();

    const [product, setproduct] = useState(null);
    const [img, setimg] = useState([]);
    const getData=async()=>{
    //    const data=await fetch('https://fakestoreapi.com/products')
     let res =await axios({
        method:"post",
        url:`http://only999backend.herokuapp.com/OneProduct/${id}`,
      })
      console.log(res)
    try{
        setproduct(res.data)
    }catch{
        setproduct(null)
    }
    
    setimg(res.data.img)
    }
    useEffect(() => {
        getData()

        console.log(product)
    }, []);
    return (

        <div>
            {product!=null?<Silder slide={img}/>:<h1>Not Found</h1>}
            
        </div>
    );
}

export default Singalproducts;
