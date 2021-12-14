import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../redux/categories/categoryActions";
import ProductCard from "../product-card/product-card.component";
import "./collection-preview.styles.scss";

const CollectionPreview = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoading, categories } = useSelector((state) => state.categories);
  console.log("preview", isLoading, categories);

  useEffect(
    () => dispatch(getCategoryProducts(params.categoryId)),
    [dispatch, params]
  );

  const renderCategoryProducts =
    !isLoading &&
    categories?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <div>
      <h2>{params.categoryId.toUpperCase()}</h2>
      <div className="products-container">{renderCategoryProducts}</div>
    </div>
  );
};

export default CollectionPreview;
