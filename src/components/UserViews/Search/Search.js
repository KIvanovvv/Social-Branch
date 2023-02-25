import Background from "../../UI/Background.js";
import classes from "./Search.module.css";
import SearchBoard from "./SearchBoard.js";
const Search = () => {
  return (
    <>
      <Background />
      <div className={classes.wrapper}>
        <SearchBoard />
      </div>
    </>
  );
};

export default Search;
