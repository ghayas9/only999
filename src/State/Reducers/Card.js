import { ADD_TO_CARD,REMOVE_FROM_CARD } from "../Constants/Constants";
const init = []

export default Card=(state=init,action)=>{
    if(action.type===ADD_TO_CARD){
        /////////CODE
        // state.push(action.payload)
        return state
    }else if(action.type===REMOVE_FROM_CARD){
        //////CODE
        // state.pop()
        return state
    }else{
        return state
    }
}
