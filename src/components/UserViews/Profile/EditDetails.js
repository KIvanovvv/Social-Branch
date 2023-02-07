import React, { useState } from "react";
import classes from "./EditDetails.module.css";
// import profilePic from "../../../resources/profilePic.jpg";
import Button from "../../UI/Button.js";
import {
  changeImageById,
  changePasswordById,
  changeUsernameById,
} from "../../../services/authServices.js";

const EditDetails = (props) => {
  const [username, setUsername] = useState(props.userData.username);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  async function onUsernameSave() {
    if (!username.trim()) {
      return;
    }
    const user = await changeUsernameById(props.userData._id, username);
    const session = JSON.parse(sessionStorage.getItem("user"));
    session.username = user.username;
    sessionStorage.setItem("user", JSON.stringify(session));
    setUsernameSaved(true);
  }
  function onUsernameChange(e) {
    setUsername(e.target.value);
    console.log(username);
  }

  function onImageChange(e) {
    setImageUrl(e.target.value);
  }

  async function onImageSave() {
    if (!imageUrl.trim()) {
      return;
    }
    const user = await changeImageById(props.userData._id, imageUrl);
    const session = JSON.parse(sessionStorage.getItem("user"));
    session.imageUrl = user.imageUrl;
    sessionStorage.setItem("user", JSON.stringify(session));
    setImageSaved(true);
  }

  async function onPasswordSave() {
    if (!password.trim()) {
      return;
    }
    const user = await changePasswordById(props.userData._id, password);
    setPasswordSaved(true);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Edit personal details</p>
      </div>
      <div className={classes.content}>
        <ul>
          <li>
            <div className={classes.list_cell}>
              <div className={classes.list_top}>Username</div>
              <div className={classes.list_bottom}>
                <input
                  type="text"
                  value={username}
                  onChange={onUsernameChange}
                />
                <Button
                  onClick={onUsernameSave}
                  className={usernameSaved ? classes.saved : ""}
                  disabled={usernameSaved ? true : false}
                >
                  {usernameSaved ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.list_cell}>
              <div className={classes.list_top}>Password</div>
              <div className={classes.list_bottom}>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={onPasswordChange}
                />
                <Button
                  onClick={onPasswordSave}
                  className={passwordSaved ? classes.saved : ""}
                  disabled={passwordSaved ? true : false}
                >
                  {passwordSaved ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          </li>
          <li>
            <div className={classes.list_cell_pic}>
              <div className={classes.list_left_pic}>
                <div
                  style={{
                    backgroundImage: `url(${props.userData.imageUrl})`,
                  }}
                  className={classes.img}
                ></div>
              </div>
              <div className={classes.list_bottom}>
                <input
                  type="text"
                  placeholder="Image url..."
                  className={classes.img_input}
                  onChange={onImageChange}
                  value={imageUrl}
                />
                <Button
                  onClick={onImageSave}
                  className={imageSaved ? classes.saved : ""}
                  disabled={imageSaved ? true : false}
                >
                  {imageSaved ? "Saved" : "Save"}
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditDetails;
