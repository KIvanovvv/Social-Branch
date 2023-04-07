import React, { useContext } from "react";
import Button from "../Utils/Button.js";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import UserState from "../../state-ctx/userState.js";

const Header = () => {
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    ctxSetUserData({});
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <h2>Social-Branch</h2>
        {ctxUserData.email && (
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
              {/* <div
                className={
                  hasNewMsg ? classes.message_dot_new : classes.message_dot_old
                }
              ></div> */}
            </Link>
          </div>
        )}
      </div>

      {!ctxUserData.email && (
        <div className={classes.btns_guest}>
          <Link to={"/login"} className={classes.login}>
            Login
          </Link>
          <Link to="/register" className={classes.register}>
            Register
          </Link>
        </div>
      )}
      {ctxUserData.email && (
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
