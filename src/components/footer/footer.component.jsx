import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-attr">
        <a href="https://icons8.com/icon/rKDsLEslOCMJ/luggage-cart">
          Luggage Cart icon by Icons8
        </a>
      </div>
      <div className="footer-attr">
        Photo by{" "}
        <a href="https://unsplash.com/@sahandbabali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Sahand Babali
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/electronics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Footer;
