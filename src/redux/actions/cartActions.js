import axios from "axios"
import {ADD_TO_CART,REMOVE_TO_CART} from "../constants/cartConstants"
export const cartActions = (id,qty,selectedvendor,pri) => async(dispatch,getState)=>
{

const {data} = await axios.get(`/api/products/${id}`)
dispatch({type:ADD_TO_CART,
payload:{
    product:data._id,
    name:data.name,
    image:data.image,
    price:data.price,
    vendors:data.vendors,
    calories:data.calories,
    selectedvendor,
    qty,
    pri
}
})
localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}



export const removeFromCart=(id,selectedvendor)=>(dispatch,getState)=>{
    dispatch({
        type:REMOVE_TO_CART,
        payload:{id,selectedvendor}
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}


