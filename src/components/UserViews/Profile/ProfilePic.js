import staticPic from "../../../resources/profilePic.jpg";
import classes from "./ProfilePic.module.css";
import { useSelector } from "react-redux";

const ProfilePic = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{
          backgroundImage: `url(${
            userData.imageUrl ? userData.imageUrl : staticPic
          })`,
        }}
      ></div>
    </div>
  );
};

export default ProfilePic;
