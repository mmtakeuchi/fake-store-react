import { createAsyncThunk } from "@reduxjs/toolkit";

export const cartError = (error) => {
  return error;
};

export const toggleCart = createAsyncThunk("cart/toggleCart", async () => {
  return;
});

export const addToCart = createAsyncThunk("cart/addToCart", async (item) => {
  try {
    if (item) {
      return item;
    }
  } catch (error) {
    console.log("Error", error);
    return cartError(error);
  }
});

export const clearCart = createAsyncThunk("cart/clearCart", async (cart) => {
  try {
    if (cart && cart.cartItems.length) {
      return [];
    }
  } catch (error) {
    console.log("Error", error);
    return cartError(error);
  }
});
