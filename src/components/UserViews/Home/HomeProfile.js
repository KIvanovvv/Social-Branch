import { useEffect, useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./HomeProfile.module.css";
import staticPic from "../../../resources/profilePic.jpg";

const HomeProfile = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [displayImageChanged, setDisplayImageChanged] = useState(false);
  // user.displayImage = user.imageUrl ? user.imageUrl : staticPic;
  function onNeutralClick() {
    user.displayImage = user.imageUrl ? user.imageUrl : staticPic;
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setDisplayImageChanged(true);
  }
  function onHappyClick() {
    user.displayImage = user.moods.happy ? user.moods.happy : staticPic;
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setDisplayImageChanged(true);
  }
  function onSadClick() {
    user.displayImage = user.moods.sad ? user.moods.sad : staticPic;
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setDisplayImageChanged(true);
  }
  function onAngryClick() {
    user.displayImage = user.moods.angry ? user.moods.angry : staticPic;
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    setDisplayImageChanged(true);
  }

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
    setDisplayImageChanged(false);
  }, [displayImageChanged]);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classes.profile_img}
          style={{
            backgroundImage: `url(${
              user.displayImage ? user.displayImage : staticPic
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
