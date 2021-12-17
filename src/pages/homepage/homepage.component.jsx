import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/categoryActions";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./homepage.styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const renderCategoryImages = () => {
    return categories?.map((category) => (
      <CollectionPreview key={category.id} category={category} />
    ));
  };

  useEffect(() => dispatch(getCategories()), [dispatch]);

  return (
    <div className="home-container">
      <h2 className="home-container_title">Fake Store</h2>
      <div className="home-container_categories-grid">
        {renderCategoryImages()}
      </div>
    </div>
  );
};

export default HomePage;
