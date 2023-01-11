import React, { useContext } from "react";
// import profilePic from "../../../resources/profilePic.jpg";
import StateContext from "../../state-ctx/state-ctx.js";
import classes from "./HomeProfile.module.css";

const HomeProfile = () => {
  const ctx = useContext(StateContext);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${ctx.currentUser.profileUrl})` }}
      ></div>
    </div>
  );
};

export default HomeProfile;
