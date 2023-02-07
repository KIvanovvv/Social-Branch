import React, { useEffect, useState } from "react";
import { changeDescriptionById } from "../../../services/authServices.js";
import Button from "../../UI/Button.js";
import classes from "./UserBio.module.css";

const UserBio = (props) => {
  const [bio, setBio] = useState(props.userData.description);
  const [bioSaved, setBioSaved] = useState(false);

  function onChangeHandler(e) {
    setBio(e.target.value);
  }

  async function onSaveHandler() {
    const user = await changeDescriptionById(props.userData._id, bio);
    const session = JSON.parse(sessionStorage.getItem("user"));
    session.description = user.description;
    sessionStorage.setItem("user", JSON.stringify(session));
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
