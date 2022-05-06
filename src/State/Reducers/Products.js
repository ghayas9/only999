import { GET_PRODUCTS, RELOAD_PRODUCTS } from "../Constants/Constants";
const init = null

const Products= async(state=init,action)=>{
    if(action.type===GET_PRODUCTS){

        return state
    }
    else if(action.type===RELOAD_PRODUCTS){
       console.log('reload...')
       state = await GetData()
        return state
    }else{
        if(state){
            return state
            
        }else{
            return await GetData()
        }
    }
}


const GetData=async()=>{
    try{
        let res =await fetch('http://only999backend.herokuapp.com/AllProducts')
        let data = await res.json();
        return data
        }catch(e){
        console.log(e)
        return []
        }
}

 //    const data=await fetch('https://fakestoreapi.com/products')
export default Products;