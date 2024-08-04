import { configureStore } from "@reduxjs/toolkit";
import setsSlice from "./setsSlice";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";
import userSlice from "./userSlice";

 
export const store = configureStore({
    reducer:{
        setsSlice:setsSlice,
        cartSlice:cartSlice,
        products: productsSlice,
        user: userSlice
    }
})