import {ADD_TO_CART,REMOVE_TO_CART} from "../constants/cartConstants"
 
export const addToCartReducer=(state={cartItems:[]},action)=>{
    switch (action.type)
    {
        case ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartItems.find(x=>(x.product===item.product && x.selectedvendor===item.selectedvendor))
             
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map(x=>x.product===item.product?item:x)
                }
            }
            else{
                return {...state,cartItems:[...state.cartItems,item]}
            }
        case REMOVE_TO_CART:
            const {id,selectedvendor}=action.payload
            return{
                ...state,cartItems:state.cartItems.filter((x)=>(x.product!==id && x.selectedvendor===selectedvendor))
            }  
        default:
            return state    
    }
}
