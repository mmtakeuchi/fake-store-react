import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categoryActions";
import ProductCard from "../../components/product-card/product-card.component";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-page.styles.scss";

const CollectionPage = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoading, categories } = useSelector((state) => state.categories);
  console.log(isLoading, categories);

  useEffect(() => {
    dispatch(selectCategory(params.categoryId));
    setLoading(false);
  }, [dispatch, loading, params.categoryId]);

  //   useEffect(() => {
  //     dispatch(getCategoryProducts(params.categoryId));
  //     setLoading(false);
  //   }, [dispatch, loading, params.categoryId]);

  const renderCategoryProducts =
    !isLoading &&
    categories?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  return (
    <div>
      {!loading && (
        <>
          <h2>{params.categoryId.toUpperCase()}</h2>
          <div className="products-container">{renderCategoryProducts}</div>
        </>
      )}
    </div>
  );
};

export default CollectionPage;
