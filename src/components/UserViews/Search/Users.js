import { useEffect, useState } from "react";
import Spinner from "../../../resources/Spinner.js";
import { getUserByQuery } from "../../../services/authServices.js";
import UserList from "./UserList.js";
import classes from "./Users.module.css";

const Users = ({ query, modalVisible, setModalUserId }) => {
  const [users, setUsers] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setHasLoaded(false);
      const users = await getUserByQuery(query);
      setHasLoaded(true);
      setUsers(users);
    };
    const timer = setTimeout(() => {
      fetchUsers();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  if (!hasLoaded) {
    return (
      <div className={classes.spinner_container}>
        <Spinner className={classes.spinner} w={400} h={400} />
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.ul}>
        {users.map((user) => (
          <UserList
            user={user}
            key={user._id}
            modalVisible={modalVisible}
            setModalUserId={setModalUserId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Users;
