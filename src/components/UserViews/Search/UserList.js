import Button from "../../UI/Button.js";
import classes from "./UserList.module.css";

const user = {
  username: "Mike",
  description: "Hello Im Mike",
  email: "mike@abv.bg",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4hRG8aYmHy31bMIEh0LUtwv8Ie8GEvxlng&usqp=CAU",
};

const UserList = () => {
  return (
    <li className={classes.list}>
      {/* <div className={classes.user_container}> */}
      <div
        className={classes.img}
        style={{
          backgroundImage: `url(${user.imageUrl})`,
        }}
      />
      <p className={classes.username}>{user.username}</p>
      {/* </div> */}
      <Button className={classes.btn}>View Details</Button>
    </li>
  );
};

export default UserList;
