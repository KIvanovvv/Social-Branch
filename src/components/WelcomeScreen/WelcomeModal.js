import React from "react";
import classes from "./WelcomeModal.module.css";
const WelcomeModal = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Welcome to Social Branch</h2>
      <p className={classes.text}>
        We are happy to have you on board ! Join you'r friends on to the best
        social media.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default WelcomeModal;
