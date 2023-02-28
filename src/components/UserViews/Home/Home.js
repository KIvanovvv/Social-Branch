import React, { useEffect, useState } from "react";
import { getUserById } from "../../../services/authServices.js";
import Background from "../../UI/Background.js";
import UserModal from "../../UI/UserModal.js";
import classes from "./Home.module.css";
import HomeProfile from "./HomeProfile.js";
import PostBoard from "./PostBoard.js";
import UserPost from "./UserPost.js";
const Home = () => {
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
    //Change onBlur to ModalComponent
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
        <div className={classes.left_column}>
          <HomeProfile />
          <UserPost />
        </div>
        <div className={classes.right_column}>
          <PostBoard
            modalVisible={setUserModalVisible}
            setModalUserId={setModalUserId}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
