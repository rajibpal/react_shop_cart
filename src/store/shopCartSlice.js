import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state,action){ 
            return {...state, cartList:[...state.cartList,action.payload], total:state.total + action.payload.price} 
        },
        remove(state,action){
            const updatedList = state.cartList.filter(cart=> cart.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return {...state, cartList:updatedList,total:total}
        }
    }
})

export const {add,remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;