// import profilePic from "../../../resources/profilePic.jpg";
import classes from "./HomeProfile.module.css";

const HomeProfile = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.profile_img}
        style={{ backgroundImage: `url(${user.imageUrl})` }}
      ></div>
    </div>
  );
};

export default HomeProfile;
