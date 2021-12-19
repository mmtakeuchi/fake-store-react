import React from "react";
import { useNavigate } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ category: { image, title } }) => {
  const navigate = useNavigate();

  return (
    <div className="collection-preview" onClick={() => navigate("shop")}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="collection-preview_image"
      />
      <div className="collection-preview_details">
        <span className="collection-preview_details_title">
          {title.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default CollectionPreview;
