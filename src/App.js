import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "./redux/products/productActions";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const App = () => {
  useEffect(() => getProducts());

  return (
    <div className="App">
      <Header />
      <h1>Fake Store</h1>
      <div className="main-container">
        <Routes>
          <Route to="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
