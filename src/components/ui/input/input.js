import React from "react";
import "./input.scss";

const Input = ({ val, inputChangeHandler, placeholder, showHint }) => {
  return (
    <>
      <input
        type="text"
        value={val}
        onChange={(ev) => inputChangeHandler(ev.target.value)}
        placeholder={placeholder}
      />
      {showHint && <span>Enter เพื่อส่ง</span>}
    </>
  );
};

export default Input;
