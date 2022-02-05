import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cart/cartActions";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as PaperPlane } from "../../assets/paper-plane.svg";
import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { hidden } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <Link to="/">
        <PaperPlane className="logo" />
      </Link>
      <div className="options-container">
        <Link to="shop" className="option">
          SHOP
        </Link>

        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-luggage-cart-vacation-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          alt="cart-icon"
          className="option cart-icon"
          onClick={() => dispatch(toggleCart())}
        />
        {hidden ? "" : <CartDropdown />}
      </div>
    </div>
  );
};

export default Header;
