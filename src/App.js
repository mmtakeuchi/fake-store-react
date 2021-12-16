import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";
import CollectionPage from "./pages/collection-page/collection-page.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<Shoppage />} />
          <Route path="categories/:categoryId" element={<CollectionPage />} />
        </Routes>
      </div>
      <a href="https://icons8.com/icon/rKDsLEslOCMJ/luggage-cart">
        Luggage Cart icon by Icons8
      </a>
    </div>
  );
};

export default App;
