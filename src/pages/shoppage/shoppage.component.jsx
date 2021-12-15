import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.";
import ProductCard from "../../components/product-card/product-card.component";
import "./shoppage.styles.scss";

const Shoppage = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { isLoading, products } = useSelector((state) => state.products);

  const renderProducts = () => {
    return (
      !loading &&
      products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    );
  };

  useEffect(() => {
    dispatch(getProducts());
    setLoading(false);
  }, [dispatch, loading]);

  return (
    <div className="shop-container">
      {!loading && (
        // <Routes>
        //   <Route index element={<CollectionOverview />} />
        // </Routes>
        <div className="products-container">{renderProducts()}</div>
      )}
    </div>
  );
};

export default Shoppage;
