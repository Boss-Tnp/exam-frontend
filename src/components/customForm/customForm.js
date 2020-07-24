import React from "react";
import Input from "../ui/input/input";
import Button from "../ui/button/button";

const CustomForm = (props) => {
  const {
    title,
    hideBackButton,
    hideSubmitButton,
    inputText,
    inputChangeHandler,
    backPageHandler,
    submitHandler,
    placeholder,
    submitText,
  } = props;

  return (
    <div className="mlr fade-from-bottom">
      <div className="title-section">{title}</div>
      <div className="input-section">
        <Input
          val={inputText}
          inputChangeHandler={inputChangeHandler}
          placeholder={placeholder}
        />
      </div>
      <div className="button-section">
        <Button
          text="กลับ"
          textButton
          hidden={hideBackButton}
          submitHandler={backPageHandler}
        />
        <Button
          text={submitText}
          hidden={hideSubmitButton}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default CustomForm;
