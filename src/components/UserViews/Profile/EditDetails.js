import React, { useEffect, useState } from "react";
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
import UploadComponent from "../../Utils/UploadComponent.js";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/index.js";

const EditDetails = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userData.username);
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [imageUrl, setImageUrl] = useState(userData.imageUrl);
  const [imageHappyUrl, setImageHappyUrl] = useState(userData.moods?.happy);
  const [imageSadUrl, setImageSadUrl] = useState(userData.moods?.sad);
  const [imageAngryUrl, setImageAngryUrl] = useState(userData.moods?.angry);

  useEffect(() => {
    (async function onAngrySave() {
      const user = await updateAngry(
        userData._id,
        imageAngryUrl,
        userData.accessToken
      );
      user.displayImage = userData.imageUrl;
      dispatch(userActions.setUserData({ ...userData, ...user }));
    })();
  }, [imageAngryUrl]);

  useEffect(() => {
    (async function onSadSave() {
      const user = await updateSad(
        userData._id,
        imageSadUrl,
        userData.accessToken
      );
      user.displayImage = userData.imageUrl;
      dispatch(userActions.setUserData({ ...userData, ...user }));
    })();
  }, [imageSadUrl]);

  useEffect(() => {
    (async function onHappySave() {
      const user = await updateHappy(
        userData._id,
        imageHappyUrl,
        userData.accessToken
      );
      user.displayImage = userData.imageUrl;
      dispatch(userActions.setUserData({ ...userData, ...user }));
    })();
  }, [imageHappyUrl]);
  async function onUsernameSave() {
    if (!username.trim()) {
      return;
    }
    const user = await changeUsernameById(
      userData._id,
      username,
      userData.accessToken
    );
    user.displayImage = userData.displayImage;
    setUsernameSaved(true);
    dispatch(userActions.setUserData({ ...userData, ...user }));
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
        userData._id,
        imageUrl,
        userData.accessToken
      );
      user.displayImage = userData.imageUrl;
      dispatch(userActions.setUserData({ ...userData, ...user }));
    })();
  }, [imageUrl]);

  async function onPasswordSave() {
    if (!password.trim() || password.length < 8) {
      return;
    }
    await changePasswordById(userData._id, password, userData.accessToken);
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
                  <UploadComponent setImage={setImageUrl} />
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
                  <UploadComponent setImage={setImageHappyUrl} />
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
                  <UploadComponent setImage={setImageSadUrl} />
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
                  <UploadComponent setImage={setImageAngryUrl} />
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
