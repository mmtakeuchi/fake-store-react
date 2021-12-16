import React from "react";
import { Link } from "react-router-dom";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as PaperPlane } from "../../assets/paper-plane.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <PaperPlane className="logo" />
      </Link>
      <div className="options-container">
        <Link to="shop" className="option">
          Shop
        </Link>
        <p className="option">Sign In</p>
        <CartDropdown />
      </div>
    </div>
  );
};

export default Header;
