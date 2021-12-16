import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getCategoryProducts,
  selectCategory,
} from "./categoryActions";

const initialState = {
  isLoading: false,
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
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
      })
      .addCase(selectCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(selectCategory.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.categories = payload;
      });
  },
});

export default categoriesSlice.reducer;
