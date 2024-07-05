import { configureStore } from "@reduxjs/toolkit";
import setsSlice from "./setsSlice";
 
export const store = configureStore({
    reducer:{
        setsSlice:setsSlice

    }
})