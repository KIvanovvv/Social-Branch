import React  from "react";
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

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <Routes>
        <Route path={`/`} element={<WelcomeScreen />} />
        <Route path={`/login`} element={<LoginFrom />} />
        <Route path={`/register`} element={<RegisterForm />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/profile`} element={<Profile />} />
        <Route path={`/mypost`} element={<MyPosts />} />
        <Route path={`/search`} element={<Search />} />
      </Routes>

    </div>
  );
}

export default App;
