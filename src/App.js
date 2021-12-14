import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import CollectionPage from "./pages/collection-page/collection-page.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Fake Store</h1>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<CollectionPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
