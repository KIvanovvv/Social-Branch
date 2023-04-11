import React, { useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { createPost } from "../../../services/postServices.js";
// import StateContext from "../../../state-ctx/state-ctx.js";
// import UserState from "../../../state-ctx/userState.js";
import Button from "../../Utils/Button.js";
import classes from "./UserPost.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/index.js";
const UserPost = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onPublishHandler = async () => {
    if (post.trim().length === 0) {
      return;
    }
    setIsLoading(true);
    await createPost(post, userData);
    setIsLoading(false);
    setPost("");
    dispatch(userActions.updateUserPosts());
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
        <Button onClick={onPublishHandler}>
          {isLoading ? <Spinner w={15} h={15} /> : "Publish"}
        </Button>
      </div>
    </div>
  );
};

export default UserPost;
