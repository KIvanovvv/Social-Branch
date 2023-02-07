import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const customClass = `${classes.btn} ${
    props.className ? props.className : ""
  }`;
  return (
    <button
      onClick={props.onClick}
      className={customClass}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
