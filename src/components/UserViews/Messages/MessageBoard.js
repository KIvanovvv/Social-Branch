import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getUserById } from "../../../services/authServices.js";
import UserState from "../../../state-ctx/userState.js";
import classes from "./MessageBoard.module.css";
import MessageList from "./MessageList.js";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const { userData: ctxUserData } = useContext(UserState);

  useEffect(() => {
    (async function getMessages() {
      setLoadingMessages(true);
      const user = await getUserById(ctxUserData._id);
      setMessages(user.messages);
      setLoadingMessages(false);
    })();
  }, []);
  console.log(messages);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Message Board</p>
      </div>
      <div className={classes.content}>
        <ul className={classes.ul}>
          {loadingMessages ? (
            <Spinner w={200} h={200} />
          ) : (
            messages.map((msgObj, i) => {
              return <MessageList msgObj={msgObj} key={i} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default MessageBoard;
