import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com";

const productsError = (error) => {
  return error;
};

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (state) => {
    try {
      const products = await axios
        .get(`${BASE_URL}/products`)
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log("Error", err);
          return productsError(err);
        });

      if (products) {
        return products;
      }
    } catch (error) {
      console.log("Error", error);
      return productsError(error);
    }
  }
);
