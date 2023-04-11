import Button from "../Utils/Button.js";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/index.js";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    dispatch(userActions.setUserData({}));
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <h2>Social-Branch</h2>
        {userData.email && (
          <div className={classes.btns_user}>
            <div className={classes.welcome_user}>
              <p>Welcome {userData.username}</p>
            </div>
            <Link className={classes.btn_home} to="/home">
              Home
            </Link>
            <Link className={classes.btn_profile} to="/profile">
              Profile
            </Link>
            <Link className={classes.btn_myposts} to="/mypost">
              My Posts
            </Link>
            <Link className={classes.btn_search} to="/search">
              Search
            </Link>
            <Link className={classes.btn_message} to="/messages">
              Messages{" "}
            </Link>
          </div>
        )}
      </div>

      {!userData.email && (
        <div className={classes.btns_guest}>
          <Link to={"/login"} className={classes.login}>
            Login
          </Link>
          <Link to="/register" className={classes.register}>
            Register
          </Link>
        </div>
      )}
      {userData.email && (
        <>
          {" "}
          <Button onClick={onLogoutHandler} className={classes.btn_logout}>
            Logout
          </Button>
        </>
      )}
    </div>
  );
};

export default Header;
