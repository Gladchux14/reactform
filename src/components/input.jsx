import React from "react";

const Input = ({ type, placeholder, value, handleChange, label, labelText, setState}) => {
  return (
    <>
    <label htmlFor={label} className="label">{labelText}:</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={label}
      onChange={(e)=>handleChange(e, setState)}
    />
     </>
  );
};

export default Input;