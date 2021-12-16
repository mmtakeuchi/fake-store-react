import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartActions";
import { addItemToCart } from "./cartUtil";

const initialState = {
  isLoading: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, ({ isLoading }) => {
        isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.cartItems = addItemToCart(state.cartItems, payload);
      });
  },
});

export default cartSlice.reducer;
