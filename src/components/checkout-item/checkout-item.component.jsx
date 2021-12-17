import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearItemInCart,
} from "../../redux/cart/cartActions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { title, image, quantity, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="checkout-item_image">
        <img src={image} alt={title} />
      </div>
      <p className="checkout-item_title">{title}</p>
      <span className="checkout-item_details">
        <div onClick={() => dispatch(removeFromCart(item))}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => dispatch(addToCart(item))}>&#10095;</div>
      </span>
      <p className="checkout-item_price">${price.toFixed(2)}</p>
      <div
        className="remove-item-btn"
        onClick={() => dispatch(clearItemInCart(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
