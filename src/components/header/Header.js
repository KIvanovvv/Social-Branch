import React, { useContext } from "react";
import StateContext from "../state-ctx/state-ctx.js";
import Button from "../UI/Button.js";

import classes from "./Header.module.css";

const Header = (props) => {
  const ctx = useContext(StateContext);

  return (
    <div className={classes.header}>
      <nav>
        <div className={classes.name}>
          <h2 onClick={ctx.onHome}>Social-Branch</h2>
        </div>

        {!ctx.hasUserLogged && (
          <div className={classes.btns_guest}>
            <Button onClick={ctx.onLogin} className={classes.login}>
              Login
            </Button>
            <Button onClick={ctx.onRegister} className={classes.register}>
              Register
            </Button>
          </div>
        )}
        {ctx.hasUserLogged && (
          <div className={classes.btns_user}>
            <Button className={classes.btn_home} onClick={ctx.onHomeClicked}>
              Home
            </Button>
            <Button
              className={classes.btn_profile}
              onClick={ctx.onProfileClicked}
            >
              Profile
            </Button>
            <Button className={classes.btn_chat}>Chat</Button>
            <Button onClick={ctx.onLogout} className={classes.btn_logout}>
              Logout
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
