import { useContext, useEffect, useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./HomeProfile.module.css";
import staticPic from "../../../resources/profilePic.jpg";
import UserState from "../../../state-ctx/userState.js";

const HomeProfile = () => {
  const [displayImageChanged, setDisplayImageChanged] = useState(false);
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);
  console.log(ctxUserData);

  function onNeutralClick() {
    ctxUserData.displayImage = ctxUserData.imageUrl
      ? ctxUserData.imageUrl
      : staticPic;
    ctxSetUserData(ctxUserData);
    sessionStorage.setItem("user", JSON.stringify(ctxUserData));
    setDisplayImageChanged(true);
  }
  function onHappyClick() {
    ctxUserData.displayImage = ctxUserData.moods.happy
      ? ctxUserData.moods.happy
      : staticPic;
    ctxSetUserData(ctxUserData);
    sessionStorage.setItem("user", JSON.stringify(ctxUserData));
    setDisplayImageChanged(true);
  }
  function onSadClick() {
    ctxUserData.displayImage = ctxUserData.moods.sad
      ? ctxUserData.moods.sad
      : staticPic;
    ctxSetUserData(ctxUserData);
    sessionStorage.setItem("user", JSON.stringify(ctxUserData));
    setDisplayImageChanged(true);
  }
  function onAngryClick() {
    ctxUserData.displayImage = ctxUserData.moods.angry
      ? ctxUserData.moods.angry
      : staticPic;
    ctxSetUserData(ctxUserData);
    sessionStorage.setItem("user", JSON.stringify(ctxUserData));
    setDisplayImageChanged(true);
  }

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(ctxUserData));
    setDisplayImageChanged(false);
  }, [displayImageChanged]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classes.profile_img}
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
