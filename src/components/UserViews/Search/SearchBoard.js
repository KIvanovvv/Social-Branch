import React, { useState } from "react";
import Button from "../../UI/Button.js";
import Posts from "./Posts.js";
import classes from "./SearchBoard.module.css";

export const SearchBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  function onChangeHandler(e) {
    setSearchQuery(e.target.value);
  }
  console.log(searchQuery);
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.header_text_container}>
          {" "}
          <p>Search for posts</p>
        </div>

        <div className={classes.header_actions}>
          <input
            type="text"
            placeholder="Enter username..."
            onChange={onChangeHandler}
            value={searchQuery}
          />
          <Button>Search</Button>
        </div>
      </div>
      <div className={classes.content}>{<Posts />}</div>
    </div>
  );
};
export default SearchBoard;
