import React from "react";
import Button from "../UI/Button.js";
import classes from "./Posts.module.css";
const Posts = (props) => {
  return (
    <ul className={classes.list}>
      {props.data.map((data) => {
        console.log(data);
        return (
          <li key={data.id}>
            <div
              className={classes.img}
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>{" "}
            <p>{data.text}</p>{" "}
            <div className={classes.btn_container}>
              <Button className={classes.btn}>Comments</Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
