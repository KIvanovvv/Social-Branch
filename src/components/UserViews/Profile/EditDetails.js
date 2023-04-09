import React, { useContext, useEffect, useState } from "react";
import classes from "./EditDetails.module.css";
import Button from "../../Utils/Button.js";
import {
  changeImageById,
  changePasswordById,
  changeUsernameById,
  updateAngry,
  updateHappy,
  updateSad,
} from "../../../services/authServices.js";
import staticPic from "../../../resources/profilePic.jpg";
import UserState from "../../../state-ctx/userState.js";
import UploadComponent from "../../Utils/UploadComponent.js";

const EditDetails = () => {
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);
  const [username, setUsername] = useState(ctxUserData.username);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState(ctxUserData.imageUrl);
  const [imageHappyUrl, setImageHappyUrl] = useState(ctxUserData.moods?.happy);
  const [imageSadUrl, setImageSadUrl] = useState(ctxUserData.moods?.sad);
  const [imageAngryUrl, setImageAngryUrl] = useState(ctxUserData.moods?.angry);

  useEffect(() => {
    (async function onAngrySave() {
      const user = await updateAngry(
        ctxUserData._id,
        imageAngryUrl,
        ctxUserData.accessToken
      );
      user.displayImage = ctxUserData.imageUrl;
      ctxSetUserData({ ...ctxUserData, ...user });
    })();
  }, [imageAngryUrl]);

  useEffect(() => {
    (async function onSadSave() {
      const user = await updateSad(
        ctxUserData._id,
        imageSadUrl,
        ctxUserData.accessToken
      );
      user.displayImage = ctxUserData.imageUrl;
      ctxSetUserData({ ...ctxUserData, ...user });
    })();
  }, [imageSadUrl]);

  useEffect(() => {
    (async function onHappySave() {
      const user = await updateHappy(
        ctxUserData._id,
        imageHappyUrl,
        ctxUserData.accessToken
      );
      user.displayImage = ctxUserData.imageUrl;
      ctxSetUserData({ ...ctxUserData, ...user });
    })();
  }, [imageHappyUrl]);
  async function onUsernameSave() {
    if (!username.trim()) {
      return;
    }
    const user = await changeUsernameById(
      ctxUserData._id,
      username,
      ctxUserData.accessToken
    );
    user.displayImage = ctxUserData.displayImage;
    setUsernameSaved(true);
    ctxSetUserData({ ...ctxUserData, ...user });
  }
  function onUsernameChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    (async function onImageSave() {
      if (!imageUrl.trim()) {
        return;
      }
      const user = await changeImageById(
        ctxUserData._id,
        imageUrl,
        ctxUserData.accessToken
      );
      user.displayImage = ctxUserData.imageUrl;
      ctxSetUserData({ ...ctxUserData, ...user });
    })();
  }, [imageUrl]);

  async function onPasswordSave() {
    if (!password.trim() || password.length < 8) {
      return;
    }
    await changePasswordById(
      ctxUserData._id,
      password,
      ctxUserData.accessToken
    );
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
                        ctxUserData.imageUrl ? ctxUserData.imageUrl : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_neutral}>Neutral</div>
                <div className={classes.list_bottom}>
                  <UploadComponent setImage={setImageUrl} />
                  {/* <input
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
                  </Button> */}
                </div>
              </div>
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        ctxUserData.moods.happy
                          ? ctxUserData.moods.happy
                          : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_happy}>Happy</div>
                <div className={classes.list_bottom}>
                  <UploadComponent setImage={setImageHappyUrl} />
                  {/* <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeHappy}
                    value={imageHappyUrl}
                  />
                  <Button
                    onClick={onHappySave}
                    className={imageHappySaved ? classes.saved : ""}
                    disabled={imageHappySaved ? true : false}
                  >
                    {imageHappySaved ? "Saved" : "Save"}
                  </Button> */}
                </div>
              </div>
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        ctxUserData.moods.sad
                          ? ctxUserData.moods.sad
                          : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_sad}>Sad</div>
                <div className={classes.list_bottom}>
                  <UploadComponent setImage={setImageSadUrl} />
                  {/* <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeSad}
                    value={imageSadUrl}
                  />
                  <Button
                    onClick={onSadSave}
                    className={imageSadSaved ? classes.saved : ""}
                    disabled={imageSadSaved ? true : false}
                  >
                    {imageSadSaved ? "Saved" : "Save"}
                  </Button> */}
                </div>
              </div>
              <div className={classes.img_card}>
                <div className={classes.list_left_pic}>
                  <div
                    style={{
                      backgroundImage: `url(${
                        ctxUserData.moods.angry
                          ? ctxUserData.moods.angry
                          : staticPic
                      })`,
                    }}
                    className={classes.img}
                  ></div>
                </div>
                <div className={classes.mood_text_angry}>Angry</div>
                <div className={classes.list_bottom}>
                  <UploadComponent setImage={setImageAngryUrl} />
                  {/* <input
                    type="text"
                    placeholder="Image url..."
                    className={classes.img_input}
                    onChange={onChangeAngry}
                    value={imageAngryUrl}
                  />
                  <Button
                    onClick={onAngrySave}
                    className={imageAngrySaved ? classes.saved : ""}
                    disabled={imageAngrySaved ? true : false}
                  >
                    {imageAngrySaved ? "Saved" : "Save"}
                  </Button> */}
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
