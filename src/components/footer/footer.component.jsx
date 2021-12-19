import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/mmtakeuchi/fake-store-react" target="_blank">
        Github
      </a>
      <div className="footer-attrs">
        <div>
          <a href="https://icons8.com/icon/rKDsLEslOCMJ/luggage-cart">
            Luggage Cart icon by <span className="attr">Icons8</span>
          </a>
        </div>
        <div>
          Photo by{" "}
          <a href="https://unsplash.com/@sahandbabali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            <span className="attr">Sahand Babali</span>
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/electronics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            <span className="attr">Unsplash</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
