import React ,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Silder from './components/silder';
import { useSelector } from 'react-redux';

const Singalproducts = () => {
    let { id } = useParams();
    const state = useSelector(state=>state.Products)
    const [product, setproduct] = useState(null);
    const [img, setimg] = useState([]);
    const [title, settitle] = useState('');
    const getData=async()=>{
    //    const data=await fetch('https://fakestoreapi.com/products')
     let res =await axios({
        method:"post",
        url:`http://only999backend.herokuapp.com/OneProduct/${id}`,
      })
    try{
        setproduct(res.data)
    }catch{
        setproduct([])
    }
    
    setimg(res.data.img[0])
    settitle(res.data.title)
    }
    useEffect(() => {
        getData()
    }, []);
    return (

        // <div>
        //     {product!=null?<Silder slide={img}/>:<h1>Searchin</h1>}
        // </div>
        <div>
        <img src={img} alt="" style={{
            width:'400px'
        }}/>
        <h1>price ...</h1>
        <h1>{title}</h1>

        </div>
        
    );
}

export default Singalproducts;
