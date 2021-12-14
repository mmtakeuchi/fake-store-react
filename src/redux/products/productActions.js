import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com";

const productsError = (state, error) => {
  return { ...state, error };
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (state) => {
    const products = await axios
      .get(`${BASE_URL}/products`)
      .then((response) => response.data);

    try {
      if (products) {
        return {
          products,
        };
      }
    } catch (error) {
      console.log("Error", error);
      return productsError(state, error);
    }
  }
);
