import { useContext } from "react";
import Button from "../../Utils/Button.js";
import classes from "./HomeProfile.module.css";
import staticPic from "../../../resources/profilePic.jpg";
import UserState from "../../../state-ctx/userState.js";

const HomeProfile = () => {
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);

  function onNeutralClick() {
    const displayImage = ctxUserData.imageUrl
      ? ctxUserData.imageUrl
      : staticPic;
    ctxSetUserData({ ...ctxUserData, displayImage });
  }
  function onHappyClick() {
    const displayImage = ctxUserData.moods.happy
      ? ctxUserData.moods.happy
      : staticPic;
    ctxSetUserData({ ...ctxUserData, displayImage });
  }
  function onSadClick() {
    const displayImage = ctxUserData.moods.sad
      ? ctxUserData.moods.sad
      : staticPic;
    ctxSetUserData({ ...ctxUserData, displayImage });
  }
  function onAngryClick() {
    const displayImage = ctxUserData.moods.angry
      ? ctxUserData.moods.angry
      : staticPic;
    ctxSetUserData({ ...ctxUserData, displayImage });
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classes.profile_img}
          data-testid="profile_img"
          style={{
            backgroundImage: `url(${
              ctxUserData.displayImage
                ? ctxUserData.displayImage
                : ctxUserData.imageUrl || staticPic
            })`,
          }}
        ></div>
      </div>
      <div className={classes.actions}>
        <Button className={classes.btn_neutral} onClick={onNeutralClick}>
          Neutral
        </Button>
        <Button className={classes.btn_happy} onClick={onHappyClick}>
          Happy
        </Button>
        <Button className={classes.btn_sad} onClick={onSadClick}>
          Sad
        </Button>
        <Button className={classes.btn_angry} onClick={onAngryClick}>
          Angry
        </Button>
      </div>
    </div>
  );
};

export default HomeProfile;
