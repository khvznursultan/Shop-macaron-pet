import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                const updatedCart = state.cart.map(item => 
                    item.id === id
                        ? { ...item, count: item.count + count }
                        : item
                );
                state.cart = updatedCart;
            } else {
                state.cart = [...state.cart, { ...action.payload, count: 1 }];
            }
        },
        removeFromCart: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                const item = state.cart[itemIndex];
                if (item.count > count) {
                    const updatedCart = state.cart.map(item =>
                        item.id === id
                            ? { ...item, count: item.count - count }
                            : item
                    );
                    state.cart = updatedCart;
                } else {
                    state.cart = state.cart.filter(item => item.id !== id);
                }
            }
        },
        deleteCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions;