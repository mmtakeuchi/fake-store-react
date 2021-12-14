import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com";

const categoryError = (error) => {
  return error;
};

export const getCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const categories = await axios
      .get(`${BASE_URL}/products/categories`)
      .then((response) => response.data);

    try {
      if (categories) {
        return categories;
      }
    } catch (error) {
      console.log("Error", error);
      return categoryError(error);
    }
  }
);

export const getCategoryProducts = createAsyncThunk(
  "categories/fetchCategoryProducts",
  async (category) => {
    const categoryProducts = await axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((response) => response.data);

    try {
      if (categoryProducts) {
        return categoryProducts;
      }
    } catch (error) {
      console.log("Error", error);
      return categoryError(error);
    }
  }
);
