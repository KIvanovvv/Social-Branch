import Button from "../../UI/Button.js";
import classes from "./UserList.module.css";
import staticPic from "../../../resources/profilePic.jpg";

const UserList = ({ user, modalVisible, setModalUserId }) => {
  function ProfileClickHandler(id) {
    setModalUserId(id);
    modalVisible(true);
  }
  return (
    <li className={classes.list}>
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${user.imageUrl || staticPic})`,
        }}
      />
      <p className={classes.username}>{user.username}</p>
      <Button
        className={classes.btn}
        onClick={() => ProfileClickHandler(user._id)}
      >
        View Details
      </Button>
    </li>
  );
};

export default UserList;
