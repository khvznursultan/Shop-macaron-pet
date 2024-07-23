import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('http://localhost:8080/clothes');
    const data = await response.json();
    return data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filteredItems: [],
        error: null,
        filter: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.filteredItems = state.items.filter(item => item.type === action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setFilter } = productsSlice.actions;
export default productsSlice.reducer;
