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
});

export default productsSlice.reducer;
