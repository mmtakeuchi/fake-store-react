import React from "react";
import "./product-preview.styles.scss";

const ProductPreview = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.title}</h2>
    </div>
  );
};

export default ProductPreview;
