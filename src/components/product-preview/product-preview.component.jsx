import React from "react";
import "./product-preview.styles.scss";

const ProductPreview = ({ product }) => {
  return (
    <div className="product-preview">
      <div className="product-preview_image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-preview_footer">
        <p className="product-preview_title">{product.title}</p>
        <p className="product-preview_price">$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductPreview;
