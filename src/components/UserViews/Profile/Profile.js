import React from "react";
import EditDetails from "./EditDetails.js";

import classes from "./Profile.module.css";
import ProfilePic from "./ProfilePic.js";
import UserBio from "./UserBio.js";
const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className={classes.wrapper}>
      <div className={classes.left_column}>
        <ProfilePic userData={user} />
        <UserBio userData={user} />{" "}
      </div>
      <div className={classes.right_column}>
        <EditDetails userData={user} />
      </div>
    </div>
  );
};

export default Profile;
