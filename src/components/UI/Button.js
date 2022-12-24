import React from "react";
import classes from "./Button.module.css"

const Button = (props)=>{
  const customClass =`${classes.btn} ${props.className ? props.className : ""}`
  return (
    <button onClick={props.onClick} className={customClass}>{props.children}</button>
  )
}

export default Button