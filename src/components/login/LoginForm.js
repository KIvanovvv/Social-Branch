import React, { useContext, useEffect, useState } from "react";
import StateContext from "../state-ctx/state-ctx.js";
import Button from "../UI/Button.js";

import classes from "./LoginForm.module.css";
const LoginFrom = (props) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const ctx = useContext(StateContext);

  const emailPattern = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let isFormValid = isEmailValid && isPasswordValid;
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsEmailTouched(false);
  };

  const onPassChangeHadler = (e) => {
    setPassword(e.target.value);
    setIsPasswordTouched(false);
  };
  useEffect(() => {
    if (email.match(emailPattern)) {
      setIsEmailValid(true);
      console.log(`email is valid`);
    }
    if (!email.match(emailPattern)) {
      setIsEmailValid(false);
    }
    if (password.trim().length > 7) {
      setIsPasswordValid(true);
    }
    if (password.trim().length < 8) {
      setIsPasswordValid(false);
    }
  }, [email, password]);

  const onEmailBlurHandler = () => {
    setIsEmailTouched(true);
  };
  const onPassBlurHandler = () => {
    setIsPasswordTouched(true);
  };
  const fetchUserData = async () => {
    const response = await fetch(
      `http://social-branch-default-rtdb.europe-west1.firebasedatabase.app/users.json`
    );
    const data = await response.json();
    const users = Object.values(data);
    //console.log(data);
    return users;
  };
  const onSignInHandler = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const users = await fetchUserData();
    const currentUser = users.find(
      (x) => x.email === email && x.password === password
    );
    if (currentUser) {
      ctx.setCurrentUser(currentUser)
    } else {
      console.log(`The user does not exist`);
      return;
    }
    // console.log(users);
    ctx.onHasUserLogged();
  };

  const inputClasses = {
    email: `${classes.email} ${
      !isEmailValid && isEmailTouched && classes.invalid
    }`,
    password: `${classes.password} ${
      !isPasswordValid && isPasswordTouched && classes.invalid
    }`,
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <h3>Enter email and password</h3>
        </div>
        <div>
          <form onSubmit={onSignInHandler} className={classes.inputs}>
            <input
              className={inputClasses.email}
              type="text"
              placeholder="Email"
              onChange={onEmailChangeHandler}
              onBlur={onEmailBlurHandler}
            />
            {!isEmailValid && isEmailTouched && (
              <p className={classes.error_text}>Please enter a valid email !</p>
            )}
            <input
              className={inputClasses.password}
              type="password"
              placeholder="Password"
              onChange={onPassChangeHadler}
              onBlur={onPassBlurHandler}
            />
            {!isPasswordValid && isPasswordTouched && (
              <p className={classes.error_text}>
                Password must be at least 8 symbols !
              </p>
            )}
            <Button className={classes.btn} type="submit">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginFrom;
