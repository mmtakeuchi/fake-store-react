import React, { useState, useEffect, useRef, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./shop-navbar.styles.scss";
import { getCategories } from "../../redux/categories/categoryActions";

const ShopNavBar = ({ setFilter }) => {
  const dispatch = useDispatch();
  const elRefs = useRef([]);
  const [active, setActive] = useState("SHOW ALL");
  const { categories } = useSelector((state) => state.categories);

  const handleActive = (e) => {
    const dataId = e.target.dataset.index;

    setActive(elRefs.current[dataId].current.textContent);
    setFilter(elRefs.current[dataId].current.textContent);
  };

  elRefs.current = ["Show All", ...categories]?.map(
    (category, i) => elRefs.current[i] ?? createRef()
  );

  const renderCategories = () => {
    return categories?.map((category, i) => (
      <p
        className={`category-filter${
          active === category.title.toUpperCase() ? "_active" : ""
        }`}
        key={category.id}
        data-index={i + 1}
        ref={elRefs.current[i + 1]}
        onClick={handleActive}
      >
        {category.title.toUpperCase()}
      </p>
    ));
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="shop-navbar">
      <p
        className={`category-filter${active === "SHOW ALL" ? "_active" : ""}`}
        data-index={0}
        ref={elRefs.current[0]}
        onClick={handleActive}
      >
        SHOW ALL
      </p>
      {renderCategories()}
    </div>
  );
};

export default ShopNavBar;
