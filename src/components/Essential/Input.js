import React from "react";
import './Input.css'

const Input = ({handleRadioChange, value, title, name, color}) => {
  return (
    <div className="input-level">
      {/* no need to add id and for label tag at label and input id */}
      <label className="side-label">
        <input onChange={handleRadioChange} value={value} name={name} type="radio"/>
        <span className="checkmark" style={{backgroundColor: color}}></span>{title}
      </label>
    </div>
    // <div className="input-level">
    //   <label for="gents" className="side-label">
    //     <input onChange={handleRadioChange} value={value} name={name} id="gents" type="radio"/>
    //     <span className="checkmark" style={{backgroundColor: color}}></span>{title}
    //   </label>
    // </div>
  );
};

export default Input;
