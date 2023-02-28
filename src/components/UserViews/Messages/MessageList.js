import { useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./MessageList.module.css";

const MessageList = ({ msgObj }) => {
  const [viewed, setViewed] = useState(msgObj.isViewed);
  console.log(viewed);
  function onShowHandler() {
    if (!viewed) {
      setViewed(true);
      // await messageViewed()
    }
  }
  return (
    <li>
      <div className={classes.list_container}>
        <p
          className={
            msgObj.isViewed
              ? classes.announncementOld
              : classes.announncementNew
          }
        >
          {msgObj.isViewed
            ? "You already saw this message"
            : "You have a new message"}{" "}
        </p>
        <div className={classes.user_container}>
          <div
            className={classes.img}
            style={{
              backgroundImage: `url(${msgObj.ownerImg})`,
            }}
          />
          <p className={classes.username}>{msgObj.ownerUsername}</p>
        </div>

        <Button className={classes.btn} onClick={onShowHandler}>
          Show message
        </Button>
      </div>
    </li>
  );
};

export default MessageList;
