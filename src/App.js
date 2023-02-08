import React, { useContext } from "react";
import Header from "./components/header/Header.js";
import WelcomeScreen from "./components/welcome-screen/WelcomeScreen.js";
import classes from "./App.module.css";
import LoginFrom from "./components/login/LoginForm.js";
import RegisterForm from "./components/register/RegisterForm.js";
import Home from "./components/UserViews/Home/Home.js";
import Background from "./components/UI/Background.js";
import StateContext from "./components/state-ctx/state-ctx.js";
import Profile from "./components/UserViews/Profile/Profile.js";
import MyPosts from "./components/UserViews/MyPosts/MyPosts.js";
// import db from "./services/firebase.js";

function App() {
  // console.log("Ap: ", db);
  const ctx = useContext(StateContext);
  let content = null;
  if (ctx.isWelcome) {
    content = <WelcomeScreen />;
  }
  if (ctx.loginCLicked) {
    content = <LoginFrom />;
  }
  if (ctx.registerClicked) {
    content = <RegisterForm />;
  }
  if (ctx.hasUserLogged && ctx.homeClicked) {
    content = <Home />;
  }
  if (ctx.hasUserLogged && ctx.profileClicked) {
    content = <Profile />;
  }
  if (ctx.hasUserLogged && ctx.myPostsClicked) {
    content = <MyPosts />;
  }

  return (
    <div className={classes.main}>
      <Header />
      {!ctx.isWelcome && <Background />}
      {content}
    </div>
  );
}

export default App;
