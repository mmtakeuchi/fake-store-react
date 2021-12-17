import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoryActions";
import { addCategoryImage } from "./categoryUtil";

const initialState = {
  isLoading: false,
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categories = addCategoryImage(payload);
      });
  },
});

export default categoriesSlice.reducer;
