import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./collection-page.styles.scss";

const CollectionPage = (props) => {
  return (
    <div className="collection-page">
      <Routes>
        <Route path=":categoryId" element={<CollectionPreview />} />
        <Route index element={<CollectionOverview />} />
      </Routes>
    </div>
  );
};

export default CollectionPage;
