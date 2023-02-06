import React from "react";
import profilePic from "../../../resources/profilePic.jpg";

import classes from "./ProfilePic.module.css";

const ProfilePic = (props) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${props.userData.imageUrl})` }}
      ></div>
    </div>
  );
};

export default ProfilePic;
