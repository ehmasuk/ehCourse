import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";

configureStore

const store = configureStore({
    reducer : {
        cartSlice : cartSlice,
    }
})

export default store;