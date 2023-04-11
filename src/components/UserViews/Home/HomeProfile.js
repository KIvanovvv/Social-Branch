import Button from "../../Utils/Button.js";
import classes from "./HomeProfile.module.css";
import staticPic from "../../../resources/profilePic.jpg";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/index.js";

const HomeProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  function onNeutralClick() {
    const displayImage = userData.imageUrl ? userData.imageUrl : staticPic;
    dispatch(userActions.setImageNeutral(displayImage));
  }
  function onHappyClick() {
    const displayImage = userData.moods.happy
      ? userData.moods.happy
      : staticPic;
    dispatch(userActions.setImageHappy(displayImage));
  }
  function onSadClick() {
    const displayImage = userData.moods.sad ? userData.moods.sad : staticPic;
    dispatch(userActions.setImageSad(displayImage));
  }
  function onAngryClick() {
    const displayImage = userData.moods.angry
      ? userData.moods.angry
      : staticPic;
    dispatch(userActions.setImageAngry(displayImage));
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div
          className={classes.profile_img}
          data-testid="profile_img"
          style={{
            backgroundImage: `url(${
              userData.displayImage
                ? userData.displayImage
                : userData.imageUrl || staticPic
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
