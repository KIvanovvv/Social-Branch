import React, { useState } from "react";
import Button from "../../UI/Button.js";
import Posts from "./Posts.js";
import classes from "./SearchBoard.module.css";
import Users from "./Users.js";

export const SearchBoard = ({ modalVisible, setModalUserId }) => {
  const [searchPosts, setSearchPosts] = useState(true);
  const [searchUsers, setSearchUsers] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }

  function onPostsClickHandler() {
    setSearchPosts(true);
    setSearchUsers(false);
  }
  function onUsersClickHandler() {
    setSearchPosts(false);
    setSearchUsers(true);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.header_text_container}>
          {" "}
          <p>
            Search for{" "}
            <Button
              className={searchPosts ? classes.clicked : classes.not_clicked}
              onClick={onPostsClickHandler}
            >
              Posts
            </Button>{" "}
            <Button
              className={searchUsers ? classes.clicked : classes.not_clicked}
              onClick={onUsersClickHandler}
            >
              Users
            </Button>
          </p>
        </div>

        <div className={classes.header_actions}>
          <input
            type="text"
            placeholder="Enter username..."
            onChange={onChangeHandler}
            value={searchQuery}
          />
        </div>
      </div>
      <div className={classes.content}>
        {searchPosts && (
          <Posts
            query={searchQuery}
            modalVisible={modalVisible}
            setModalUserId={setModalUserId}
          />
        )}
        {searchUsers && <Users />}
      </div>
    </div>
  );
};
export default SearchBoard;
