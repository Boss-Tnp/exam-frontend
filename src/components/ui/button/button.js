import React from "react";
import "./button.scss";

const Button = ({ textButton, text, hidden, submitHandler }) => {
  return (
    <button
      className={[
        "button fade-from-bottom",
        textButton ? "textButton" : "redButton",
      ].join(" ")}
      hidden={hidden}
      onClick={submitHandler}
    >
      {text}
    </button>
  );
};

export default Button;
