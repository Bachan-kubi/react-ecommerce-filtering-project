import React from "react";
import "./Colors.css";
import Input from "../../Essential/Input";

const Colors = ({ handleRadioChange}) => {
  return (
    <div className="colors">
      <h2>Color</h2>
      <div className="color-level">
        <label className="side-label">
          <input
            onChange={handleRadioChange}
            value=""
            name="colors"
            type="radio"
          />
          <span className="checkmark"></span>All
        </label>
      </div>
      <Input
        handleRadioChange={handleRadioChange}
        name="colors"
        color="black"
        title="Black"
        value="black"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="colors"
        color="yellow"
        title="Yellow"
        value="yellow"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="colors"
        color="blue"
        title="Blue"
        value="blue"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="colors"
        color="red"
        title="Red"
        value="red"
      />
      <Input
        handleRadioChange={handleRadioChange}
        name="colors"
        color="green"
        title="Green"
        value="green"
      />
      {/* <label className="side-label">
        <input type="radio" onChange={handleInputChange} value="white" name="colors" />
        <span className="checkmark" style={{backgroundColor: "white", border: "2px solid black"}}></span>
      </label> */}
    </div>
  );
};

export default Colors;
