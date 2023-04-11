import { useEffect, useState } from "react";
import { getUserById } from "../../../services/authServices.js";
import Background from "../../Utils/Background.js";
import UserModal from "../../Utils/UserModal.js";
import classes from "./Search.module.css";
import SearchBoard from "./SearchBoard.js";
const Search = () => {
  const [modalUser, setModalUser] = useState({});
  const [modalLoading, setModalLoading] = useState(false);
  const [modalUserId, setModalUserId] = useState("");
  const [userModalVisible, setUserModalVisible] = useState(false);

  useEffect(() => {
    if (modalUserId.trim() !== "") {
      (async function getUser() {
        setModalLoading(true);
        setModalUser(await getUserById(modalUserId));
        setModalLoading(false);
      })();
    }
  }, [modalUserId]);

  function backdropOnBlur() {
    setUserModalVisible(false);
    setModalUserId("");
  }
  return (
    <>
      <Background />
      {userModalVisible && (
        <>
          <div className={classes.backdrop} onClick={backdropOnBlur} />
          <UserModal modalLoading={modalLoading} user={modalUser} />
        </>
      )}
      <div className={classes.wrapper}>
        <SearchBoard
          modalVisible={setUserModalVisible}
          setModalUserId={setModalUserId}
        />
      </div>
    </>
  );
};

export default Search;
