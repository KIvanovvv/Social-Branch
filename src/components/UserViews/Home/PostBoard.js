import React from "react";
import classes from "./PostBoard.module.css";
import Posts from "./Posts.js";
const PostBoard = ({modalVisible,setModalUserId}) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Post Board</p>
      </div>
      <div className={classes.content}>
        <Posts modalVisible={modalVisible} setModalUserId={setModalUserId}/>
      </div>
    </div>
  );
};

export default PostBoard;
