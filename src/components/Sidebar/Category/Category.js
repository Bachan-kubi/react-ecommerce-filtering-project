import React from "react";
import "./Category.css";
import Input from "../../Essential/Input";

const Category = ({ handleRadioChange }) => {
  return (
    <>
      <p className="category-title">Category</p>
      <div className="category-level">
        <label className="side-label">
          <input onChange={handleRadioChange} value="" type="radio" name="category" />
          <span className="checkmark"></span>All
        </label>
      </div>
      <Input 
        handleRadioChange={handleRadioChange} 
        value="sneakers"
        name="category"
        title="Sneakers"
      />
      <Input 
        handleRadioChange={handleRadioChange} 
        value="flats"
        name="category"
        title="Flats"
      />
      <Input 
        handleRadioChange={handleRadioChange} 
        value="sandals"
        name="category"
        title="Sandals"
      />
      <Input 
        handleRadioChange={handleRadioChange} 
        value="heels"
        name="category"
        title="Heels"
      />
    </>
  );
};

export default Category;
