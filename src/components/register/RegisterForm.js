import React from "react";
import Button from "../UI/Button.js";

import classes from "./RegisterForm.module.css";
const RegisterForm = () => {
  return (
    <>
      <div className={classes.container}>
        <div>
          <h3 className={classes.header}>Create new account</h3>
        </div>
        <div>
          <form className={classes.inputs}>
            <input
              className={classes.username}
              type="text"
              placeholder="Email"
            />
            <input
              className={classes.username}
              type="text"
              placeholder="Username"
            />
            <input
              className={classes.password}
              type="password"
              placeholder="Password"
            />
            <input
              className={classes.password}
              type="password"
              placeholder="Repeat password"
            />
            <Button className={classes.btn} type="submit">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
