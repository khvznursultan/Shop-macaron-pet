import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    error:"",
    loading:"",
    filter:{}
}

export const setsSlice = createSlice({
    name:"sets",
    initialState,
    reducers:{
        getAllSets:(state,action)=>{
            state.data = action.payload
        }
    }
})


export const {getAllSets} = setsSlice.actions
export default setsSlice.reducer