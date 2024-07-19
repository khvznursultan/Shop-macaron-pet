import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: "",
    loading: false,
    filter: {}
};

export const setsSlice = createSlice({
    name: "sets",
    initialState,
    reducers: {
        getAllSets: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = "";
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = "";
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { getAllSets, setLoading, setError, setFilter } = setsSlice.actions;
export default setsSlice.reducer;
