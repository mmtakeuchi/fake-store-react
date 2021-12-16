import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>
      <button className="product-add_btn" onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
