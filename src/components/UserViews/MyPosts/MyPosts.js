import UserState from "../../../state-ctx/userState.js";
import Background from "../../UI/Background.js";
import classes from "./MyPosts.module.css";
import PostBoard from "./PostBoard.js";

const MyPosts = () => {
  return (
    <>
      <Background />
      <UserState.Provider>
        <div className={classes.wrapper}>
          <PostBoard />
        </div>
      </UserState.Provider>
    </>
  );
};

export default MyPosts;
