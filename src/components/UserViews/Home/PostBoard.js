import React from "react";
import classes from "./PostBoard.module.css";
import profilePic from "../../../resources/profilePic.jpg";
import Posts from "./Posts.js";
const PostBoard = () => {
  const DUMMY_POSTS = [
    {
      id: 1,
      img: profilePic,
      text: "This is first post",
    },
    {
      id: 2,
      img: profilePic,
      text: "This is second post",
    },
    {
      id: 3,
      img: profilePic,
      text: "This is third post",
    },
    {
      id: 4,
      img: profilePic,
      text: "All posts are HARDCODED with Dummy Data",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Post Board</p>
      </div>
      <div className={classes.content}>
        <Posts data={DUMMY_POSTS} />
      </div>
    </div>
  );
};

export default PostBoard;
