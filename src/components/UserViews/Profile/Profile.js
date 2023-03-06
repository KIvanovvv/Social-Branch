import React, { useState } from "react";
import Background from "../../Utils/Background.js";
import EditDetails from "./EditDetails.js";

import classes from "./Profile.module.css";
import ProfilePic from "./ProfilePic.js";
import UserBio from "./UserBio.js";
const Profile = () => {
  return (
    <>
      <Background />

      <div className={classes.wrapper}>
        <div className={classes.left_column}>
          <ProfilePic />
          <UserBio />{" "}
        </div>
        <div className={classes.right_column}>
          <EditDetails />
        </div>
      </div>
    </>
  );
};

export default Profile;
