import React from "react";
import profilePic from "../../resources/profilePic.jpg";
import classes from "./HomeProfile.module.css";

const HomeProfile = () => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${profilePic})` }}
      ></div>
    </div>
  );
};

export default HomeProfile;
