import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button.js";
import { register } from "../../services/authServices.js";
import staticPic from "../../resources/profilePic.jpg";

import classes from "./RegisterForm.module.css";
import StateContext from "../state-ctx/state-ctx.js";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [repass, setRepass] = useState("");
  const [repassIsValid, setRepassIsValid] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState();
  const ctx = useContext(StateContext);

  let isFormValid = false;
  useEffect(() => {
    if (email.trim().includes("@")) {
      setEmailIsValid(true);
    }
    if (username.trim().length > 2) {
      setUsernameIsValid(true);
    }
    if (password.trim().length > 7) {
      setPasswordIsValid(true);
    }
    if (repass === password) {
      setRepassIsValid(true);
    }
  }, [email, username, password, repass]);

  isFormValid =
    emailIsValid && usernameIsValid && passwordIsValid && repassIsValid;

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const usernameOnChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const repassOnChangeHandler = (e) => {
    setRepass(e.target.value);
  };
  const imageOnChangeHandler = (e) => {
    setImageUrl(e.target.value);
  };
  const onSignupHandler = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      console.log(`Inputs are invalid`);
      return;
    }

    try {
      if (password != repass) {
        throw new Error(`Passwords dont match`);
      }
      const token = await register(email, username, password, imageUrl);
      token.displayImage = token.imageUrl ? token.imageUrl : staticPic;
      sessionStorage.setItem("user", JSON.stringify(token));
      ctx.onHasUserLogged();
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className={classes.container}>
        <div>
          <h3 className={classes.header}>Create new account</h3>
        </div>
        <div>
          {error && <p className={classes.error}>{error}</p>}
          <form onSubmit={onSignupHandler} className={classes.inputs}>
            <div className={classes.input_field}>
              {"*"}
              <input
                className={classes.username}
                type="text"
                placeholder="Email"
                onChange={emailOnChangeHandler}
              />
            </div>
            <div className={classes.input_field}>
              {"*"}
              <input
                className={classes.username}
                type="text"
                placeholder="Username"
                onChange={usernameOnChangeHandler}
              />
            </div>
            <div className={classes.input_field}>
              {"*"}
              <input
                className={classes.password}
                type="password"
                placeholder="Password"
                onChange={passwordOnChangeHandler}
              />
            </div>
            <div className={classes.input_field}>
              {"*"}
              <input
                className={classes.password}
                type="password"
                placeholder="Repeat password"
                onChange={repassOnChangeHandler}
              />
            </div>
            <input
              className={classes.image}
              type="text"
              placeholder="Image URL"
              onChange={imageOnChangeHandler}
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
