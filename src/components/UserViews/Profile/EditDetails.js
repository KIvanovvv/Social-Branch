import React, { useEffect, useState } from "react";
import classes from "./EditDetails.module.css";
import Button from "../../UI/Button.js";
import {
  changeImageById,
  changePasswordById,
  changeUsernameById,
  updateAngry,
  updateHappy,
  updateSad,
} from "../../../services/authServices.js";
import staticPic from "../../../resources/profilePic.jpg";

const EditDetails = (props) => {
  const [username, setUsername] = useState(props.userData.username);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSaved, setImageSaved] = useState(false);
  const [imageHappyUrl, setImageHappyUrl] = useState("");
  const [imageSadUrl, setImageSadUrl] = useState("");
  const [imageAngryUrl, setImageAngryUrl] = useState("");
  // const [happySaved, setHappySaved] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [userDataChanged, setUserDataChanged] = useState(false);

  async function onAngrySave() {
    const user = await updateAngry(props.userData._id, imageAngryUrl);
    setUserData(user);
    setUserDataChanged(true);
    // setHappySaved(true);
    setImageAngryUrl("");
  }

  function onChangeAngry(e) {
    setImageAngryUrl(e.target.value);
  }

  function onChangeSad(e) {
    setImageSadUrl(e.target.value);
  }
  async function onSadSave() {
    //TODO add display to user * bug when adding new photo main image becomes static
    const user = await updateSad(props.userData._id, imageSadUrl);
    setUserData(user);
    setUserDataChanged(true);
    // setHappySaved(true);
    setImageSadUrl("");
  }

  async function onHappySave() {
    const user = await updateHappy(props.userData._id, imageHappyUrl);
    setUserData(user);
    setUserDataChanged(true);
    // setHappySaved(true);
    setImageHappyUrl("");
  }
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(userData));
  }, [userDataChanged]);

  function onChangeHappy(e) {
    setImageHappyUrl(e.target.value);
  }
  async function onUsernameSave() {
    if (!username.trim()) {
      return;
    }
    const user = await changeUsernameById(props.userData._id, username);
    user.displayImage = userData.displayImage;
    setUserData(user);
    setUserDataChanged(true);
  }
  function onUsernameChange(e) {
    setUsername(e.target.value);
    // setUserDataChanged(true);
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
    user.displayImage = userData.imageUrl;
    setUserData(user);
    setUserDataChanged(true);
    setImageUrl("");
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
                <div className={classes.btn_wrapper}></div>
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
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        userData.imageUrl ? userData.imageUrl : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_neutral}>Neutral</div>
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
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        userData.moods.happy ? userData.moods.happy : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_happy}>Happy</div>
                <div className={classes.list_bottom}>
                  <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeHappy}
                    value={imageHappyUrl}
                  />
                  <Button
                    onClick={onHappySave}
                    className={imageSaved ? classes.saved : ""}
                    disabled={imageSaved ? true : false}
                  >
                    {imageSaved ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        userData.moods.sad ? userData.moods.sad : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_sad}>Sad</div>
                <div className={classes.list_bottom}>
                  <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeSad}
                    value={imageSadUrl}
                  />
                  <Button
                    onClick={onSadSave}
                    className={imageSaved ? classes.saved : ""}
                    disabled={imageSaved ? true : false}
                  >
                    {imageSaved ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        userData.moods.angry ? userData.moods.angry : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_angry}>Angry</div>
                <div className={classes.list_bottom}>
                  <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeAngry}
                    value={imageAngryUrl}
                  />
                  <Button
                    onClick={onAngrySave}
                    className={imageSaved ? classes.saved : ""}
                    disabled={imageSaved ? true : false}
                  >
                    {imageSaved ? "Saved" : "Save"}
                  </Button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditDetails;
