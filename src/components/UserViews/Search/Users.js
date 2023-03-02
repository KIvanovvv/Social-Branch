import UserList from "./UserList.js";
import classes from "./Users.module.css";

const Users = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.ul}>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
      </ul>
    </div>
  );
};

export default Users;
