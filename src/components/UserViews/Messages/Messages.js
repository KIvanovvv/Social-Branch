import Background from "../../UI/Background.js";
import MessageBoard from "./MessageBoard.js";
import classes from "./Messages.module.css";
const Messages = () => {
  return (
    <>
      <Background />
      <div className={classes.wrapper}>
        <MessageBoard />
      </div>
    </>
  );
};

export default Messages;
