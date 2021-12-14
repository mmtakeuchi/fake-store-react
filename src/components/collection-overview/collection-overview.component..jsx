import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { getProducts } from "../../redux/products/productActions";
import {
  getCategories,
  getCategoryProducts,
} from "../../redux/categories/categoryActions";
import CollectionPreview from "../collection-preview/collection-preview.component";
import ProductPreview from "../product-preview/product-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);
  console.log("overview", categories);
  console.log(loading);

  //   useEffect(() => dispatch(getProducts()), [dispatch]);
  useEffect(() => {
    dispatch(getCategories());
    setLoading(false);
  }, [dispatch, loading]);

  const renderCategories = () => {
    return (
      !categories.isLoading &&
      categories?.categories?.map((category, idx) => (
        <CollectionPreview key={idx} category={category} />
      ))
    );
  };

  const renderCollection = () => {
    return (
      !categories.isLoading &&
      categories?.categories?.map((category, idx) => (
        <div key={idx}>
          <Link to={`/shop/${category}`}>{category}</Link>
        </div>
      ))
    );
  };

  //   const renderProduct = () => {
  //     return (
  //       !products.isLoading &&
  //       products?.products?.map((product) => (
  //         <ProductPreview key={product.id} product={product} />
  //       ))
  //     );
  //   };

  return (
    <div>
      {!loading && (
        <>
          <div>Collection</div>
          <div>{renderCollection()}</div>
          {/* <div>{renderCategories()}</div> */}
          {/* <div className="products-container">{renderProduct()}</div> */}
        </>
      )}
    </div>
  );
};

export default CollectionOverview;
