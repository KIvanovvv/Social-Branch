import React from "react";
import classes from "./EditDetails.module.css";
import profilePic from "../../../resources/profilePic.jpg";
import Button from "../../UI/Button.js";
const EditDetails = () => {
  const userData = {
    username: "Gosho",
    profilePic: profilePic,
  };
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
                <input type="text" value={userData.username} />
              </div>
            </div>
          </li>
          <li>
            <div className={classes.list_cell}>
              <div className={classes.list_top}>Password</div>
              <div className={classes.list_bottom}>
                <input type="password" placeholder="Enter new password" />
              </div>
            </div>
          </li>
          <li>
            <div className={classes.list_cell_pic}>
              <div className={classes.list_left_pic}>
                <div
                  style={{ backgroundImage: `url(${profilePic})` }}
                  className={classes.img}
                ></div>
              </div>
              <div className={classes.list_right_pic}>
                <Button className={classes.btn}>Change</Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EditDetails;
