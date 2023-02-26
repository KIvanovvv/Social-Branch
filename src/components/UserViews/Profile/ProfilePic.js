import React, { useContext } from "react";
import staticPic from "../../../resources/profilePic.jpg";
import UserState from "../../../state-ctx/userState.js";

import classes from "./ProfilePic.module.css";

const ProfilePic = () => {
  const { userData: ctxUserData } = useContext(UserState);
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{
          backgroundImage: `url(${
            ctxUserData.imageUrl ? ctxUserData.imageUrl : staticPic
          })`,
        }}
      ></div>
    </div>
  );
};

export default ProfilePic;
