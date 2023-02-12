import React, { useEffect, useState } from "react";
import staticPic from "../../../resources/profilePic.jpg";

import classes from "./ProfilePic.module.css";

const ProfilePic = (props) => {
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{
          backgroundImage: `url(${
            // userData.displayImage ? userData.displayImage : staticPic
            userData.imageUrl ? userData.imageUrl : staticPic
          })`,
        }}
      ></div>
    </div>
  );
};

export default ProfilePic;
