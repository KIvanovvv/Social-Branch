import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen.js";
import classes from "./App.module.css";
import LoginFrom from "./components/Login/LoginForm.js";
import RegisterForm from "./components/Register/RegisterForm.js";
import Home from "./components/UserViews/Home/Home.js";
import Profile from "./components/UserViews/Profile/Profile.js";
import MyPosts from "./components/UserViews/MyPosts/MyPosts.js";
import Search from "./components/UserViews/Search/Search.js";
import { Routes, Route } from "react-router-dom";
import Messages from "./components/UserViews/Messages/Messages.js";
import AuthGuard from "./components/routeGuards/AuthGuard.js";
import PublicGuard from "./components/routeGuards/PublicGuard.js";
import UserState from "./state-ctx/userState.js";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className={classes.main}>
      <UserState.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes>
          <Route element={<PublicGuard />}>
            <Route path={`/`} element={<WelcomeScreen />} />
            <Route path={`/login`} element={<LoginFrom />} />
            <Route path={`/register`} element={<RegisterForm />} />
          </Route>
          <Route element={<AuthGuard />}>
            <Route path={`/home`} element={<Home />} />
            <Route path={`/profile`} element={<Profile />} />
            <Route path={`/mypost`} element={<MyPosts />} />
            <Route path={`/search`} element={<Search />} />
            <Route path={`/messages`} element={<Messages />} />
          </Route>
        </Routes>
      </UserState.Provider>
    </div>
  );
}

export default App;
