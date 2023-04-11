import React, { useEffect, useState } from "react";
import Button from "../Utils/Button.js";
import { register } from "../../services/authServices.js";
import staticPic from "../../resources/profilePic.jpg";
import classes from "./RegisterForm.module.css";
import Background from "../Utils/Background.js";
import { useNavigate } from "react-router-dom";
import Spinner from "../../resources/Spinner.js";
import { userActions } from "../../store/index.js";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [repass, setRepass] = useState("");
  const [repassIsValid, setRepassIsValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  let isFormValid = false;
  useEffect(() => {
    if (email.match(emailPattern)) {
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
    setIsEmailTouched(false);
  };
  const usernameOnChangeHandler = (e) => {
    setUsername(e.target.value);
    setIsUsernameTouched(false);
  };
  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
    setIsPasswordTouched(false);
  };
  const repassOnChangeHandler = (e) => {
    setRepass(e.target.value);
  };

  const onSignupHandler = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }

    try {
      if (password !== repass) {
        throw new Error(`Passwords dont match`);
      }
      setIsLoading(true);
      const user = await register(email, username, password);
      user.displayImage = staticPic;
      dispatch(userActions.setUserData(user));
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
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.log(error);
    }
  };

  const inputClasses = {
    email: `${classes.email} ${
      !emailIsValid && isEmailTouched && classes.invalid
    }`,
    password: `${classes.password} ${
      !passwordIsValid && isPasswordTouched && classes.invalid
    }`,
    username: `${classes.username} ${
      !usernameIsValid && isUsernameTouched && classes.invalid
    }`,
  };
  return (
    <>
      <Background />
      <div className={classes.container}>
        <div>
          <h3 className={classes.header}>Create new account</h3>
        </div>
        <div>
          {error && <p className={classes.error_text}>{error}</p>}
          <form onSubmit={onSignupHandler} className={classes.inputs}>
            {!emailIsValid && isEmailTouched && (
              <p className={classes.error_text}>Please enter a valid email !</p>
            )}
            <div className={classes.input_field}>
              {"*"}

              <input
                className={inputClasses.email}
                type="text"
                placeholder="Email"
                onChange={emailOnChangeHandler}
                onBlur={() => setIsEmailTouched(true)}
              />
            </div>
            {!usernameIsValid && isUsernameTouched && (
              <p className={classes.error_text}>
                Username must be at least 3 characters !
              </p>
            )}
            <div className={classes.input_field}>
              {"*"}
              <input
                className={inputClasses.username}
                type="text"
                placeholder="Username"
                onChange={usernameOnChangeHandler}
                onBlur={() => setIsUsernameTouched(true)}
              />
            </div>
            {!passwordIsValid && isPasswordTouched && (
              <p className={classes.error_text}>
                Password must be at least 8 symbols !
              </p>
            )}
            <div className={classes.input_field}>
              {"*"}
              <input
                className={inputClasses.password}
                type="password"
                placeholder="Password"
                onChange={passwordOnChangeHandler}
                onBlur={() => setIsPasswordTouched(true)}
              />
            </div>

            <div className={classes.input_field}>
              {"*"}
              <input
                className={inputClasses.password}
                type="password"
                placeholder="Repeat password"
                onChange={repassOnChangeHandler}
              />
            </div>

            <Button
              className={classes.btn}
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <Spinner w={15} h={15} /> : "Sign up"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
