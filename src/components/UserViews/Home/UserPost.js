import React, { useContext, useState } from "react";
import StateContext from "../../state-ctx/state-ctx.js";
import Button from "../../UI/Button.js";
import classes from "./UserPost.module.css";
const UserPost = () => {
  const ctx = useContext(StateContext);
  const [post, setPost] = useState("");
  const onPublishHandler = async () => {
    if (post.trim().length === 0) {
      return;
    }
    const response = await fetch(
      `http://social-branch-default-rtdb.europe-west1.firebasedatabase.app/posts.json`,
      {
        method: "POST",
        headers: {
          "Contet-Type": "application/json",
        },
        body: JSON.stringify({
          content: post,
          imageUrl: ctx.currentUser.profileUrl,
          ownerName: ctx.currentUser.username,
        }),
      }
    );
    const data = await response.json();
    setPost("");
    ctx.setPostUpdated(true);
  };
  const postOnChangeHandler = (e) => {
    setPost(e.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <p>Your post</p>
        </div>
      </div>
      <div className={classes.text}>
        <textarea
          placeholder="Your thoughts..."
          onChange={postOnChangeHandler}
          value={post}
        ></textarea>
      </div>
      <div className={classes.btn}>
        <Button onClick={onPublishHandler}>Publish</Button>
      </div>
    </div>
  );
};

export default UserPost;
