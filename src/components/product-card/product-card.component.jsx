import React from "react";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-price">Price: ${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
