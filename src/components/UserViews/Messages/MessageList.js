import { useContext, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { viewMessage } from "../../../services/messageService.js";
import UserState from "../../../state-ctx/userState.js";
import Button from "../../Utils/Button.js";
import classes from "./MessageList.module.css";

const MessageList = ({ msgObj, modalVisible, setModalUserId }) => {
  const [viewed, setViewed] = useState(msgObj.isViewed);
  const [msgVisible, setMsgVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userData: ctxUserData } = useContext(UserState);
  async function onShowHandler() {
    if (!viewed) {
      setIsLoading(true);
      setViewed(true);
      msgObj.isViewed = true;
      await viewMessage(msgObj._id, ctxUserData);
      setIsLoading(false);
    }
    setMsgVisible((curr) => !curr);
  }

  function onProfileClickHandler(id) {
    setModalUserId(id);
    modalVisible(true);
  }

  return (
    <li className={classes.li}>
      <div className={classes.list_container}>
        <div className={classes.header_container}>
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
              onClick={() => onProfileClickHandler(msgObj.senderId)}
              style={{
                backgroundImage: `url(${msgObj.senderImage})`,
              }}
            />
            <p className={classes.username}>{msgObj.senderUsername}</p>
          </div>

          <Button className={classes.btn} onClick={onShowHandler}>
            {msgVisible ? "Hide message" : "Show message"}
          </Button>
        </div>
        <div className={classes.msg_container}>
          {" "}
          {isLoading && <Spinner w={60} h={60} />}
          {msgVisible && (
            <>
              <p>Message: </p>
              <textarea
                rows={2}
                cols={65}
                defaultValue={msgObj.content}
                readOnly={true}
              ></textarea>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default MessageList;
