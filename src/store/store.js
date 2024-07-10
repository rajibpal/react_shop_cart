import { configureStore } from "@reduxjs/toolkit";
import {cartReducer} from "./shopCartSlice"

 export const store = configureStore({
    reducer:{
        cartState: cartReducer,
    }
})