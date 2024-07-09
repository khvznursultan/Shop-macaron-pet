import { configureStore } from "@reduxjs/toolkit";
import setsSlice from "./setsSlice";
import cartSlice from "./cartSlice";
 
export const store = configureStore({
    reducer:{
        setsSlice:setsSlice,
        cartSlice:cartSlice
    }
})