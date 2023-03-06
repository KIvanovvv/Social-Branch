import React, { useContext, useState } from "react";
import { changeDescriptionById } from "../../../services/authServices.js";
import UserState from "../../../state-ctx/userState.js";
import Button from "../../Utils/Button.js";
import classes from "./UserBio.module.css";

const UserBio = () => {
  const { userData: ctxUserData, setUserData: ctxSetUserData } =
    useContext(UserState);
  const [bio, setBio] = useState(ctxUserData.description);
  const [bioSaved, setBioSaved] = useState(false);

  function onChangeHandler(e) {
    setBio(e.target.value);
  }

  async function onSaveHandler() {
    const user = await changeDescriptionById(
      ctxUserData._id,
      bio,
      ctxUserData.accessToken
    );
    ctxSetUserData({ ...ctxUserData, ...user });
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
