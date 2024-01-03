import { createSlice } from "@reduxjs/toolkit";
import data from "../product.json";

const initialState = {
    products: [...data.products]
};
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        increaseQuantity: (state, action) => {
            const productId = action.payload;
            state.products = state.products.map((product) => product.id === productId ? { ...product, quantity: Math.min(10, product.quantity + 1),
                total_price: Math.min(10,product.quantity+1)*product.price } : product);
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            state.products = state.products.map((product) => product.id === productId ? { ...product, quantity: Math.max(1, product.quantity - 1),
                total_price: Math.max(1,product.quantity-1)*product.price } : product);
        },

        removeProduct: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((product) => product.id !== productId);
        },
    }
});

export const { increaseQuantity, decreaseQuantity, removeProduct } = productSlice.actions;
export default productSlice.reducer;