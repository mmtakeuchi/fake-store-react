import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component.";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <CollectionOverview />
    </div>
  );
};

export default HomePage;
