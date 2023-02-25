import React, { useState } from "react";
import Background from "../../UI/Background.js";
import EditDetails from "./EditDetails.js";

import classes from "./Profile.module.css";
import ProfilePic from "./ProfilePic.js";
import UserBio from "./UserBio.js";
const Profile = () => {
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  return (
    <>
      <Background />
      <div className={classes.wrapper}>
        <div className={classes.left_column}>
          <ProfilePic userData={userData} />
          <UserBio userData={userData} />{" "}
        </div>
        <div className={classes.right_column}>
          <EditDetails userData={userData} setUserData={setUserData} />
        </div>
      </div>
    </>
  );
};

export default Profile;
