import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout-page.styles.scss";

const CheckoutPage = (props) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const renderCheckoutItems = () => {
    return cart?.cartItems?.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ));
  };

  return (
    <div className="checkout-container">
      <div className="checkout-container_header">
        <div className="checkout-container_header_title">
          <span>Product</span>
        </div>
        <div className="checkout-container_header_title description">
          <span>Description</span>
        </div>
        <div className="checkout-container_header_title">
          <span>Quantity</span>
        </div>
        <div className="checkout-container_header_title">
          <span>Price</span>
        </div>
        <div className="checkout-container_header_title">
          <span>Remove</span>
        </div>
      </div>
      {renderCheckoutItems()}
      <div className="checkout-container_total">
        TOTAL: $
        {cart?.cartItems?.reduce((acc, el) => acc + el.quantity * el.price, 0)}
      </div>
    </div>
  );
};

export default CheckoutPage;
