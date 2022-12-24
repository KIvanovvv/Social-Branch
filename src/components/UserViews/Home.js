import React from "react";
import profilePic from "../../resources/profilePic.jpg";

import classes from "./Home.module.css";
import HomeProfile from "./HomeProfile.js";
import UserPost from "./UserPost.js";
const Home = () => {
  return (
    <div>
      <HomeProfile />
      <UserPost />
      {/* <PostBoard /> */}
    </div>
  );
};

export default Home;
