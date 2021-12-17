import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cart/cartActions";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown_items-container">
        {cart.cartItems.length ? (
          cart.cartItems?.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="cart-dropdown_empty-container">
            Your cart is empty
          </div>
        )}
      </div>
      <button
        className="cart-btn"
        onClick={() => {
          navigate("checkout");
          dispatch(toggleCart());
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
