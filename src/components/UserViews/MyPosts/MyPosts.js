import Background from "../../Utils/Background.js";
import classes from "./MyPosts.module.css";
import PostBoard from "./PostBoard.js";

const MyPosts = () => {
  return (
    <>
      <Background />
      <div className={classes.wrapper}>
        <PostBoard />
      </div>
    </>
  );
};

export default MyPosts;
