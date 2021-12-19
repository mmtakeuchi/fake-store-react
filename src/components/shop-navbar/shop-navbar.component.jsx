import React, { useState, useEffect, useRef, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categories/categoryActions";
import CategorySelect from "../category-select/category-select.component";
import "./shop-navbar.styles.scss";

const ShopNavBar = ({ setFilter }) => {
  const dispatch = useDispatch();
  const elRefs = useRef([]);
  const [active, setActive] = useState("SHOW ALL");
  const { isLoading, categories } = useSelector((state) => state.categories);

  const handleActive = (e) => {
    const dataId = e.target.dataset.index;

    setActive(elRefs.current[dataId].current.textContent);
    setFilter(elRefs.current[dataId].current.textContent);
  };

  elRefs.current =
    !isLoading &&
    ["Show All", ...categories]?.map(
      (category, i) => elRefs.current[i] ?? createRef()
    );

  const renderCategories = () => {
    return (
      !isLoading &&
      categories?.map((category, i) => (
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
      ))
    );
  };

  useEffect(() => dispatch(getCategories()), []);

  return (
    <div className="shop-navbar">
      <div className="category-picks">{renderCategories()}</div>
      <div className="category-select">
        <CategorySelect
          categories={categories}
          setFilter={setFilter}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default ShopNavBar;
