import React from "react";
import EditDetails from "./EditDetails.js";

import classes from "./Profile.module.css";
import ProfilePic from "./ProfilePic.js";
import UserBio from "./UserBio.js";
const Profile = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left_column}>
        <ProfilePic />
        <UserBio />{" "}
      </div>
      <div className={classes.right_column}>
        <EditDetails />
      </div>
    </div>
  );
};

export default Profile;
