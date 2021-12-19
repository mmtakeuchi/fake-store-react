import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://fakestoreapi.com";

const categoryError = (error) => {
  return error;
};

export const getCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    let categories = await axios
      .get(`${BASE_URL}/products/categories`)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        return categoryError(err);
      });

    try {
      if (categories) {
        categories = categories.map((category) => {
          return { id: uuidv4(), title: category };
        });

        return [{ id: uuidv4(), title: "show all" }, ...categories];
      }
    } catch (error) {
      console.log("Error", error);
      return categoryError(error);
    }
  }
);
