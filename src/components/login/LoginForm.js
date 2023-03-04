import React, { useContext, useEffect, useState } from "react";
import { login } from "../../services/authServices.js";
import Background from "../UI/Background.js";
import Button from "../UI/Button.js";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import Spinner from "../../resources/Spinner.js";
import UserState from "../../state-ctx/userState.js";
const LoginFrom = (props) => {
  const navigate = useNavigate();
  const { setUserData: ctxSetUserData } = useContext(UserState);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [inputsAreInvalid, setInputsAreInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailPattern = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let isFormValid = isEmailValid && isPasswordValid;
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
    setIsEmailTouched(false);
    setInputsAreInvalid(false);
  };

  const onPassChangeHadler = (e) => {
    setPassword(e.target.value);
    setIsPasswordTouched(false);
    setInputsAreInvalid(false);
  };
  useEffect(() => {
    if (email.match(emailPattern)) {
      setIsEmailValid(true);
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

  const onSignInHandler = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    try {
      setIsLoading(true);
      const user = await login(email, password);
      user.displayImage = user.imageUrl;
      ctxSetUserData(user);
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          _id: user._id,
          accessToken: user.accessToken,
        })
      );
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      setInputsAreInvalid(true);
    }
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
      <Background />
      <div className={classes.container}>
        <div className={classes.header}>
          <h3>Enter email and password</h3>
        </div>
        <div>
          {inputsAreInvalid && (
            <p className={classes.error_text}>Incorrect email or password</p>
          )}
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
            <Button
              className={classes.btn}
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <Spinner w={15} h={17} /> : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginFrom;
