import React, { useState, useEffect } from "react";
import "./category-select.styles.scss";

const CategorySelect = ({ categories, active, setActive, setFilter }) => {
  const [selection, setSelection] = useState(active);
  console.log(active, selection);

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelection(value);
    setFilter(value);
    setActive(value);
  };

  useEffect(() => setSelection(active), [active]);

  return (
    <form className="categories-select_form">
      <select value={selection} onChange={handleSelect}>
        {categories?.map((category) => (
          <option key={category.id} value={category.title.toUpperCase()}>
            {category.title.toUpperCase()}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CategorySelect;
