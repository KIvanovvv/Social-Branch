import React, { useContext } from "react";
import Header from "./components/header/Header.js";
import WelcomeScreen from "./components/welcome-screen/WelcomeScreen.js";
import classes from "./App.module.css";
import LoginFrom from "./components/login/LoginForm.js";
import RegisterForm from "./components/register/RegisterForm.js";
import Home from "./components/UserViews/Home.js";
import Background from "./components/UI/Background.js";
import StateContext from "./components/state-ctx/state-ctx.js";

function App() {
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
  if (ctx.hasUserLogged) {
    content = <Home />;
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
