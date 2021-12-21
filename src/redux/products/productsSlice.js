import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productActions";

const initialState = {
  isLoading: false,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.products = payload;
      });
  },
});

export default productsSlice.reducer;
