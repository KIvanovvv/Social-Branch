import React from "react";

import background from "../../resources/friends.jpg";
import WelcomeModal from "./WelcomeModal.js";

import classes from "./WelcomeScreen.module.css";

const WelcomeScreen = (props) => {
  return (
    <>
      <div
        className={classes.img}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <WelcomeModal />
    </>
  );
};

export default WelcomeScreen;
