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
                const item = state.cart[itemIndex];
                const newCount = item.count + count;

                if (newCount <= 5) {
                    state.cart[itemIndex] = { ...item, count: newCount };
                }
            } else {
                if (count <= 5) {
                    state.cart.push({ ...action.payload, count });
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                const item = state.cart[itemIndex];
                if (item.count > count) {
                    state.cart[itemIndex] = { ...item, count: item.count - count };
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deleteCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions;
