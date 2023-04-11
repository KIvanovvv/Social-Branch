import React, { useState } from "react";
import { changeDescriptionById } from "../../../services/authServices.js";
import Button from "../../Utils/Button.js";
import classes from "./UserBio.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/index.js";

const UserBio = () => {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [bio, setBio] = useState(userData.description);
  const [bioSaved, setBioSaved] = useState(false);

  function onChangeHandler(e) {
    setBio(e.target.value);
  }

  async function onSaveHandler() {
    const user = await changeDescriptionById(
      userData._id,
      bio,
      userData.accessToken
    );
    dispatch(userActions.setUserData({ ...userData, ...user }));
    setBioSaved(true);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div>
            <p>Personal description</p>
          </div>
        </div>
        <div className={classes.text}>
          <textarea
            placeholder="Write something about yourself..."
            onChange={onChangeHandler}
            value={bio}
          ></textarea>
        </div>
        <div className={classes.btn}>
          <Button
            onClick={onSaveHandler}
            className={bioSaved ? classes.saved : ""}
            disabled={bioSaved ? true : false}
          >
            {bioSaved ? "Saved" : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
