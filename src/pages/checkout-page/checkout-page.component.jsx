import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart/cartActions";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import "./checkout-page.styles.scss";

const CheckoutPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const renderCheckoutItems = () => {
    return cart?.cartItems?.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ));
  };

  const calculateTotal = cart?.cartItems?.reduce(
    (acc, el) => acc + el.quantity * el.price,
    0
  );

  console.log(calculateTotal, typeof calculateTotal);

  const checkout = (total) => {
    alert(`Thank you for your purchase! Your total was $${total.toFixed(2)}.`);
    dispatch(clearCart());
    navigate("/shop");
  };

  return (
    <div className="checkout-container">
      {cart.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
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
            TOTAL: ${calculateTotal.toFixed(2)}
          </div>
          <button
            className="checkout-container_btn"
            onClick={() => checkout(calculateTotal)}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
