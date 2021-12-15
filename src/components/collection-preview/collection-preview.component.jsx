import React from "react";
import { useNavigate } from "react-router-dom";
import ProductPreview from "../product-preview/product-preview.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, category }) => {
  const navigate = useNavigate();

  return (
    <div className="collection-preview">
      <h2
        className="preview-title"
        onClick={() => navigate(`/categories/${title}`)}
      >
        {title.toUpperCase()}
      </h2>

      <div className="preview-products">
        {category.map((product) => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
