import React from "react";
import "./loading-spinner.styles.scss";

const LoadingSpinner = (props) => {
  return (
    <div className="spinner-container">
      <div className="spinner-animation" />
    </div>
  );
};

export default LoadingSpinner;
