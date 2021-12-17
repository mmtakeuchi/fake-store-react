import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { image, title, quantity, price } }) => {
  return (
    <div className="cart-item">
      <img className="cart-item_image" src={image} alt={title} />

      <div className="cart-item_details">
        <span className="cart-item_details_title">{title}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
