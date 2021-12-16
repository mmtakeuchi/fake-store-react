import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const cartError = (error) => {
  return error;
};

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
