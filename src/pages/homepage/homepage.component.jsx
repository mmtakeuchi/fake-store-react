import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/categoryActions";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import "./homepage.styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const { isLoading, categories } = useSelector((state) => state.categories);

  const renderCategoryImages = () => {
    return categories
      ?.slice(1)
      .map((category) => (
        <CollectionPreview key={category.id} category={category} />
      ));
  };

  useEffect(() => dispatch(getCategories()), [dispatch]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="home-container">
      <h2 className="home-container_title">Fake Store</h2>
      <div className="home-container_categories-grid">
        {renderCategoryImages()}
      </div>
    </div>
  );
};

export default HomePage;
