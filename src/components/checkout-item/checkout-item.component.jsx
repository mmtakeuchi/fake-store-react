import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item: { title, image, quantity, price } }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item_image">
        <img src={image} alt={title} />
      </div>
      <p className="checkout-item_title">{title}</p>
      <span className="checkout-item_details">
        <div>&#10094;</div>
        <span>{quantity}</span>
        <div>&#10095;</div>
      </span>
      <p className="checkout-item_price">${price.toFixed(2)}</p>
      <div className="remove-item-btn">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
