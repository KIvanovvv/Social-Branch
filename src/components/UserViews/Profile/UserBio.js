import React, { useEffect, useState } from "react";
import Button from "../../UI/Button.js";
import classes from "./UserBio.module.css";

const UserBio = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [btnName, setBtnName] = useState(null);
  const buttonClickHandler = () => {
    setIsButtonClicked((currState) => !currState);
  };
  useEffect(() => {
    if (isButtonClicked) {
      setBtnName("Save");
    }
    if (!isButtonClicked) {
      setBtnName("Edit");
    }
  }, [isButtonClicked]);

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
            disabled={!isButtonClicked}
          ></textarea>
        </div>
        <div className={classes.btn}>
          <Button onClick={buttonClickHandler}>{btnName}</Button>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
