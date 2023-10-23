import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <p className="category-title">Category</p>
      <div className="category-level">
        <label for="all" className="side-label">
          <input id="all" type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
      </div>
      <div className="category-level">
        <label for="adidas" className="side-label">
          <input id="adidas" type="radio" name="test" />
          <span className="checkmark"></span>Adidas
        </label>
      </div>
      <div className="category-level">
        <label for="nike" className="side-label">
          <input id="nike" type="radio" name="test" />
          <span className="checkmark"></span>Nike
        </label>
      </div>
      <div className="category-level">
        <label for="heels" className="side-label">
          <input id="heels" type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
      <div className="category-level">
        <label for="puma" className="side-label">
          <input id="puma" type="radio" name="test" />
          <span className="checkmark"></span>Puma
        </label>
      </div>
      <div className="category-level">
        <label for="gents" className="side-label">
          <input id="gents" type="radio" name="test" />
          <span className="checkmark"></span>Gents
        </label>
      </div>
    </div>
  );
};

export default Category;
