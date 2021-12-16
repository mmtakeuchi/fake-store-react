import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import ShopNavBar from "../../components/shop-navbar/shop-navbar.component";
import ProductCard from "../../components/product-card/product-card.component";
import "./shoppage.styles.scss";

const Shoppage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("SHOW ALL");
  const { isLoading, products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredPRoducts] = useState();

  const renderProducts = () => {
    return (
      !isLoading &&
      products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    );
  };

  const renderFilteredProducts = () => {
    return filteredProducts?.map((filteredProduct) => (
      <ProductCard key={filteredProduct.id} product={filteredProduct} />
    ));
  };

  useEffect(() => {
    dispatch(getProducts());
    setLoading(false);
  }, [dispatch, loading]);

  useEffect(() => {
    if (filter !== "SHOW ALL") {
      setFilteredPRoducts(
        products?.filter((product) =>
          product.category.includes(filter.toLowerCase())
        )
      );
    } else {
      setFilteredPRoducts(products);
    }
  }, [filter, products]);

  return (
    <div className="shop-container">
      {!loading && (
        <>
          <ShopNavBar setFilter={setFilter} />
          <div className="products-container">{renderFilteredProducts()}</div>
        </>
      )}
    </div>
  );
};

export default Shoppage;
