import React from "react";
import classes from "./WelcomeModal.module.css";
const WelcomeModal = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Welcome to Social Branch</h2>
      <p className={classes.text}>
        We're stoked to have you on board! Get ready to join your friends on the
        wildest ride of social media. Our app is not your typical serious social
        media platform, it's a hub for all the latest memes, trending topics,
        and hilarious content that you won't find anywhere else.
      </p>
    </div>
  );
};

export default WelcomeModal;
