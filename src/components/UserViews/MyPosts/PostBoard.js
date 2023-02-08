import React from "react";
import classes from "./PostBoard.module.css";
import profilePic from "../../../resources/profilePic.jpg";
import Posts from "./Posts.js";

export const PostBoard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Your Posts</p>
      </div>
      <div className={classes.content}>
        <Posts />
      </div>
    </div>
  );
};
export default PostBoard;
