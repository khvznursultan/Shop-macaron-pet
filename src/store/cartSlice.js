import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Добавление или увеличение количества товара
        addToCart: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                // Если товар уже есть в корзине, увеличиваем или уменьшаем количество
                const updatedCart = state.cart.map(item => 
                    item.id === id
                        ? { ...item, count: item.count + count }
                        : item
                );
                state.cart = updatedCart;
            } else {
                // Если товара нет в корзине, добавляем его
                state.cart = [...state.cart, { ...action.payload, count: 1 }];
            }
        },
        // Уменьшение количества товара
        removeFromCart: (state, action) => {
            const { id, count } = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                const item = state.cart[itemIndex];
                if (item.count > count) {
                    // Если количество товара больше указанного значения, уменьшаем его
                    const updatedCart = state.cart.map(item =>
                        item.id === id
                            ? { ...item, count: item.count - count }
                            : item
                    );
                    state.cart = updatedCart;
                } else {
                    // Если количество товара меньше или равно указанному значению, удаляем товар
                    state.cart = state.cart.filter(item => item.id !== id);
                }
            }
        },
        // Удаление товара из корзины
        deleteCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteCart } = cartSlice.actions;