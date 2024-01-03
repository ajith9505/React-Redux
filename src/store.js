import productsSlice from "./productsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        products: productsSlice
    },
});

export default store;