import classes from "./MyPosts.module.css";
import PostBoard from "./PostBoard.js";

const MyPosts = () => {
  return (
    <div className={classes.wrapper}>
      <PostBoard />
    </div>
  );
};

export default MyPosts;
