import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getMessagesByUserId } from "../../../services/messageService.js";
import UserState from "../../../state-ctx/userState.js";
import Button from "../../Utils/Button.js";
import classes from "./MessageBoard.module.css";
import MessageList from "./MessageList.js";

const MessageBoard = ({ modalVisible, setModalUserId }) => {
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [reloadMsg, setReloadMsg] = useState(false);
  const { userData: ctxUserData } = useContext(UserState);

  useEffect(() => {
    (async function getMessages() {
      setLoadingMessages(true);
      setMessages(await getMessagesByUserId(ctxUserData._id));
      setLoadingMessages(false);
    })();
  }, [reloadMsg, ctxUserData._id]);

  function onReload() {
    setReloadMsg((curr) => !curr);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Message Board</p>
      </div>
      <div className={classes.content}>
        <ul className={classes.ul}>
          {loadingMessages ? (
            <Spinner w={400} h={400} />
          ) : messages.length > 0 ? (
            messages.reverse().map((msgObj) => {
              return (
                <MessageList
                  msgObj={msgObj}
                  key={msgObj._id}
                  modalVisible={modalVisible}
                  setModalUserId={setModalUserId}
                />
              );
            })
          ) : (
            <div className={classes.no_msg}>
              <p>It seems your message board is empty :( </p>
            </div>
          )}
        </ul>
      </div>
      <Button className={classes.btn_refresh} onClick={onReload}>
        Refresh
      </Button>
    </div>
  );
};

export default MessageBoard;
