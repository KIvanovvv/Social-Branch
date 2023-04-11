import { useState } from "react";
import Spinner from "../../resources/Spinner.js";
import { sendMessage } from "../../services/messageService.js";
import Button from "./Button.js";
import classes from "./UserModal.module.css";
import staticPic from "../../resources/profilePic.jpg";
import { useSelector } from "react-redux";

const UserModal = ({ modalLoading, user }) => {
  const [sendMessageVisible, setSendMessageVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  function sendMessageHandler() {
    setSendMessageVisible((curr) => !curr);
  }

  function onChangeHandler(e) {
    setMessage(e.target.value);
  }
  async function onSendHandler() {
    if (!message.trim()) {
      return;
    }
    setIsSending(true);
    await sendMessage(
      message,
      user._id,
      userData._id,
      userData.imageUrl || staticPic,
      userData.username,
      userData.accessToken
    );
    setIsSending(false);
    setMessage("");
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <p>{modalLoading ? "Loading..." : user.username}</p>
        </div>
        <div className={classes.content}>
          {modalLoading && <Spinner w={260} h={260} />}
          {!modalLoading && (
            <>
              <div className={classes.left_side}>
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${user.imageUrl || staticPic})`,
                  }}
                  className={classes.img}
                ></div>
              </div>
              <div className={classes.right_side}>
                <div className={classes.bio_container}>
                  {" "}
                  <p className={classes.bio_header}>Bio</p>
                  <textarea
                    className={classes.bio_text}
                    defaultValue={
                      user.description
                        ? user.description
                        : "The user have not shared any information about himself..."
                    }
                    readOnly={true}
                    rows={5}
                    cols={35}
                  />
                </div>

                <p className={classes.email_header}>
                  <span>Email: </span>
                  {user.email}
                </p>
                <Button className={classes.btn} onClick={sendMessageHandler}>
                  Write message
                </Button>
              </div>
            </>
          )}
        </div>
        {sendMessageVisible && (
          <div className={classes.msg_container}>
            <textarea
              rows={3}
              cols={28}
              className={classes.msg_text}
              onChange={onChangeHandler}
              value={message}
              placeholder={`Send message to ${user.username} ...`}
            />
            <Button onClick={onSendHandler}>
              {isSending ? <Spinner w={15} h={15} /> : "Send"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserModal;
