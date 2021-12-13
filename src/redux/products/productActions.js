import axios from "axios";

const productsError = (state, error) => {
  return { ...state, error };
};

export const getProducts = async (state) => {
  const products = await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => response.data);

  try {
    if (products) {
      console.log(products);

      return {
        ...state,
        isLoading: false,
        products: products,
      };
    }
  } catch (error) {
    console.log("Error", error);
    return productsError(state, error);
  }
};
