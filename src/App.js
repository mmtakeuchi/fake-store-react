import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<Shoppage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
