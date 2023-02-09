import classes from "./Search.module.css";
import SearchBoard from "./SearchBoard.js";
export function Search() {
  return (
    <div className={classes.wrapper}>
      <SearchBoard />
    </div>
  );
}
