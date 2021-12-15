import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryProducts } from "../../redux/categories/categoryActions";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionOverview = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCategoryProducts());
    setLoading(false);
  }, [dispatch, loading]);

  const renderCategories = () => {
    return (
      !loading &&
      !categories.isLoading &&
      Object.keys(categories.categories)?.map((category, idx) => (
        <CollectionPreview
          key={idx}
          category={categories.categories[category]}
          title={category}
        />
      ))
    );
  };

  //   const renderCollection = () => {
  //     return (
  //       !categories.isLoading &&
  //       categories?.categories?.map((category, idx) => (
  //         <div key={idx}>
  //           <Link to={`/categories/${category}`}>{category}</Link>
  //         </div>
  //       ))
  //     );
  //   };

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
          <div>{renderCategories()}</div>
        </>
      )}
    </div>
  );
};

export default CollectionOverview;
