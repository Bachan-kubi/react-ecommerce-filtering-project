import React from "react";
import "./Price.css";

const Price = ({handleRadioChange}) => {
  
  return (
    <>
      <h2>Price</h2>
      <div className="price-level">
        <label for="all-price" className="side-label">
          <input id="all-price" type="radio" name="test2" />
          <span className="checkmark"></span>All
        </label>
      </div>
    </>
  );
};

export default Price;
