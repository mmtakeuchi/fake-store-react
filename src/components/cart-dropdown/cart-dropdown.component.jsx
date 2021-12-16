import React from "react";
import { useSelector } from "react-redux";
import "./cart-dropdown.styles.scss";

const CartDropdown = (props) => {
  const state = useSelector((state) => state.cart);
  console.log(state);
  return (
    <div>
      <img
        src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-luggage-cart-vacation-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
        className="option cart-icon"
      />
    </div>
  );
};

export default CartDropdown;
