import { createSlice } from "@reduxjs/toolkit";
import {
  toggleCart,
  addToCart,
  removeFromCart,
  clearItemInCart,
  clearCart,
} from "./cartActions";
import { addItemToCart, removeItemInCart, clearCartItem } from "./cartUtil";

const initialState = {
  isLoading: false,
  hidden: true,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart,
    addToCart,
    removeFromCart,
    clearItemInCart,
    clearCart,
  },
  extraReducers: (builder) => {
    builder
      .addCase(toggleCart.pending, ({ isLoading, hidden }) => {
        isLoading = true;
        hidden = true;
      })
      .addCase(toggleCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hidden = !state.hidden;
      })
      .addCase(addToCart.pending, ({ isLoading }) => {
        isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cartItems = addItemToCart(state.cartItems, payload);
      })
      .addCase(removeFromCart.pending, ({ isLoading }) => {
        isLoading = true;
      })
      .addCase(removeFromCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cartItems = removeItemInCart(state.cartItems, payload);
      })
      .addCase(clearItemInCart.pending, ({ isLoading }) => {
        isLoading = true;
      })
      .addCase(clearItemInCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cartItems = clearCartItem(state.cartItems, payload);
      })
      .addCase(clearCart.pending, ({ isLoading }) => {
        isLoading = true;
      })
      .addCase(clearCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cartItems = [];
      });
  },
});

export default cartSlice.reducer;
