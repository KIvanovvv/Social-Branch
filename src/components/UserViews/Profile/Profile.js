import React, { useEffect, useState } from "react";
import EditDetails from "./EditDetails.js";

import classes from "./Profile.module.css";
import ProfilePic from "./ProfilePic.js";
import UserBio from "./UserBio.js";
const Profile = () => {
  // const user = JSON.parse(sessionStorage.getItem("user"));
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  // const [userDataChanged, setUserDataChanged] = useState(false);
  // useEffect(() => {
  //   sessionStorage.setItem("user", JSON.stringify(userData));
  //   setUserDataChanged(false);
  // }, [userDataChanged]);
  return (
    <div className={classes.wrapper}>
      <div className={classes.left_column}>
        <ProfilePic userData={userData} />
        <UserBio userData={userData} />{" "}
      </div>
      <div className={classes.right_column}>
        <EditDetails userData={userData} setUserData={setUserData} />
      </div>
    </div>
  );
};

export default Profile;
