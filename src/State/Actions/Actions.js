import { ADD_TO_CARD, RELOAD_PRODUCTS, REMOVE_FROM_CARD } from "../Constants/Constants"

export const Reload =()=>{
    return (e)=>{
       
        e({
            type:RELOAD_PRODUCTS,
            payload:[]
        })
    }
}
export const AddToCard =(product)=>{
    return (e)=>{
        e({
            type:ADD_TO_CARD,
            payload:product
        })
    }
}

export const RemoveFromCard =(product)=>{
    return (dispatch)=>{
        dispatch({
            type:REMOVE_FROM_CARD,
            payload:product
        })
    }

}