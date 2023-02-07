import { useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./Posts.module.css";

export default function List(props) {
  //TODO  create function createComment, create model in server for comments
  const [commentsVisiable, setCommentsVisiable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(props.data._id);
  function viewComments() {
    setCommentsVisiable((curr) => !curr);
    if (commentsVisiable) {
      setIsLoading(true);
    }
    setIsLoading(false);
    console.log(commentsVisiable);
  }
  return (
    <>
      <li key={Math.random()}>
        <div
          className={classes.img}
          style={{
            backgroundImage: `url(${props.data.imageUrl})`,
          }}
        ></div>{" "}
        <p>
          <span className={classes.postName}>
            {props.data.ownerUsername} :{" "}
          </span>
          {props.data.content}
        </p>{" "}
        <div className={classes.btn_container}>
          <Button onClick={viewComments} className={classes.btn}>
            Comments
          </Button>
        </div>
      </li>
      {commentsVisiable && (
        <div className={classes.comment_section}>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <>
              {" "}
              <div className={classes.actions}>
                <input type="text" placeholder="Your comment..." />
                <Button onClick={createComment}>Publish</Button>
              </div>
              <ul>
                <li>Some comments</li>
                <li>Some comments</li>
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}
