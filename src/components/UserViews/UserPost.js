import React from "react";
import Button from "../UI/Button.js";
import classes from "./UserPost.module.css";
const UserPost = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <p>Your post</p>
        </div>
      </div>
      <div className={classes.text}>
        <textarea placeholder="Your thoughts..."></textarea>
      </div>
      <div className={classes.btn}>
        <Button>Publish</Button>
      </div>
    </div>
  );
};

export default UserPost;
