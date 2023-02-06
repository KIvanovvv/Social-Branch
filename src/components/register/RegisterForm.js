import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button.js";
import { register } from "../../services/authServices.js";

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
    // const response = await fetch(
    //   `http://social-branch-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       profileUrl: imageUrl,
    //       username: username,
    //     }),
    //   }
    // );
    const token = await register(email, username, password, imageUrl);
    sessionStorage.setItem("user", JSON.stringify(token));
    ctx.onHasUserLogged();
  };
  return (
    <>
      <div className={classes.container}>
        <div>
          <h3 className={classes.header}>Create new account</h3>
        </div>
        <div>
          <form onSubmit={onSignupHandler} className={classes.inputs}>
            <input
              className={classes.username}
              type="text"
              placeholder="Email"
              onChange={emailOnChangeHandler}
            />
            <input
              className={classes.username}
              type="text"
              placeholder="Username"
              onChange={usernameOnChangeHandler}
            />
            <input
              className={classes.password}
              type="password"
              placeholder="Password"
              onChange={passwordOnChangeHandler}
            />
            <input
              className={classes.password}
              type="password"
              placeholder="Repeat password"
              onChange={repassOnChangeHandler}
            />
            <input
              className={classes.password}
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
