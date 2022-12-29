import React from "react";
import Button from "../UI/Button.js";
import classes from "./PostBoard.module.css";
const PostBoard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Post Board</p>
      </div>
      <div className={classes.content}>
        <ul className={classes.list}>
          <li>
            <div className={classes.img}></div>{" "}
            <p>
              Some post
              hereaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaa
            </p>{" "}
            <div className={classes.btn_container}>
              <Button>Comments</Button>
            </div>
          </li>
          <li>
            <div className={classes.img}></div> <p>Some post here</p>{" "}
            <div className={classes.btn_container}>
              <Button>Comments</Button>
            </div>
          </li>
          <li>
            <div className={classes.img}></div> <p>Some post here</p>{" "}
            <div className={classes.btn_container}>
              <Button>Comments</Button>
            </div>
          </li>
          <li>
            <div className={classes.img}></div> <p>Some post here</p>{" "}
            <div className={classes.btn_container}>
              <Button>Comments</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostBoard;
