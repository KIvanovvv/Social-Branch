import React from "react";
import profilePic from "../../../resources/profilePic.jpg";
import classes from "./ProfilePic.module.css";

const ProfilePic = () => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${profilePic})` }}
      ></div>
    </div>
  );
};

export default ProfilePic;
