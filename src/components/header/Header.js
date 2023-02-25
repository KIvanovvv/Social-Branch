import React, { useContext } from "react";
import StateContext from "../../state-ctx/state-ctx.js";
import Button from "../UI/Button.js";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
const Header = (props) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const ctx = useContext(StateContext);
  const navigate = useNavigate();
  const onLogoutHandler = () => {
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
              <p>Welcome {user.username}</p>
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
