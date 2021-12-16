import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categorySlice";
import cartReducer from "./cart/cartSlice";

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
