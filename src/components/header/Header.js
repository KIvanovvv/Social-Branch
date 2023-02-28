import React, { useContext, useEffect, useState } from "react";
import StateContext from "../../state-ctx/state-ctx.js";
import Button from "../UI/Button.js";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import UserState from "../../state-ctx/userState.js";
import { getUserById } from "../../services/authServices.js";
const Header = (props) => {
  const [messages, setMessages] = useState([]);
  const ctx = useContext(StateContext);
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);
  const navigate = useNavigate();
  const hasNewMsg = ctxUserData.messages.some((x) => x.isViewed === false);
  const onLogoutHandler = () => {
    ctxSetUserData({});
    sessionStorage.clear();
    navigate("/");
    ctx.onLogout();
  };

  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <h2>Social-Branch</h2>
        {ctx.hasUserLogged && (
          <div className={classes.btns_user}>
            <div className={classes.welcome_user}>
              <p>Welcome {ctxUserData.username}</p>
            </div>
            <Link className={classes.btn_home} to="/home">
              Home
            </Link>
            <Link className={classes.btn_profile} to="/profile">
              Profile
            </Link>
            <Link className={classes.btn_myposts} to="/mypost">
              My Posts
            </Link>
            <Link className={classes.btn_search} to="/search">
              Search
            </Link>
            <Link className={classes.btn_message} to="/messages">
              Messages{" "}
              <div
                className={
                  hasNewMsg ? classes.message_dot_new : classes.message_dot_old
                }
              ></div>
            </Link>
          </div>
        )}
      </div>

      {!ctx.hasUserLogged && (
        <div className={classes.btns_guest}>
          <Link to={"/login"} className={classes.login}>
            Login
          </Link>
          <Link to="/register" className={classes.register}>
            Register
          </Link>
        </div>
      )}
      {ctx.hasUserLogged && (
        <>
          {" "}
          <Button onClick={onLogoutHandler} className={classes.btn_logout}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
