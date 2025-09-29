// src/store/Store.jsx
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "Kim",
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "Nike01", count: 2 },
    { id: 2, name: "Nike03", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
