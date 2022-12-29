import React from "react";
import HomeProfile from "../Home/HomeProfile.js";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.wrapper}>
      <HomeProfile />
    </div>
  );
};

export default Profile;
