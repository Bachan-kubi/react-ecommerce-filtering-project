import React from "react";
import "./Price.css";
import Input from "../../Essential/Input";

const Price = ({handleRadioChange}) => {
  
  return (
    <>
      <h2>Price</h2>
      <div className="price-level">
        <label className="side-label">
          <input onChange={handleRadioChange} value="" name="price" type="radio" />
          <span className="checkmark"></span>All
        </label>
      </div>
      <Input
        handleRadioChange={handleRadioChange}
        name="price"
        value={50}
        title="$0-50"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="price"
        value={100}
        title="$50-100"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="price"
        value={150}
        title="$100-150"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="price"
        value={200}
        title="$150-200"
      />
    </>
  );
};

export default Price;
