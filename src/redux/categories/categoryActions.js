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
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        return categoryError(err);
      });

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
  async () => {
    const categoryProducts = {};

    const categories = await axios
      .get(`${BASE_URL}/products/categories`)
      .then((response) => response.data);

    if (categories) {
      await Promise.all(
        categories.map(async (category) => {
          categoryProducts[category] = await axios
            .get(`${BASE_URL}/products/category/${category}`)
            .then((response) => response.data)
            .catch((err) => {
              console.log(err);
              return categoryError(err);
            });
        })
      );
    }

    try {
      if (categories && categoryProducts) {
        console.log(categoryProducts);
        return categoryProducts;
      }
    } catch (error) {
      console.log("Error", error);
      return categoryError(error);
    }
  }
);

export const selectCategory = createAsyncThunk(
  "categories/selectCategory",
  async (category) => {
    try {
      const products = await axios
        .get(`${BASE_URL}/products/category/${category}`)
        .then((response) => response.data)
        .catch((err) => {
          console.log(err);
          return categoryError(err);
        });

      if (products) {
        return products;
      }
    } catch (error) {
      console.log("Error", error);
      return categoryError(error);
    }
  }
);
