import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getCategoryProducts } from "./categoryActions";

const initialState = {
  isLoading: false,
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getCategories,
    getCategoryProducts,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      })
      .addCase(getCategoryProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = payload;
      });
  },
});

export default categoriesSlice.reducer;
