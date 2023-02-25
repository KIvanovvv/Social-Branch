import React from "react";
import Background from "../../UI/Background.js";

import classes from "./Home.module.css";
import HomeProfile from "./HomeProfile.js";
import PostBoard from "./PostBoard.js";
import UserPost from "./UserPost.js";
const Home = () => {
  return (
    <>
      <Background />
      <div className={classes.wrapper}>
        <div className={classes.left_column}>
          <HomeProfile />
          <UserPost />
        </div>
        <div className={classes.right_column}>
          <PostBoard />
        </div>
      </div>
    </>
  );
};

export default Home;
