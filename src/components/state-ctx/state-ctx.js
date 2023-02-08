import React, { useState } from "react";

const StateContext = React.createContext({
  loginCLicked: false,
  onLogin: () => {},
  registerClicked: false,
  onRegister: () => {},
  isWelcome: true,
  onHome: () => {},
  hasUserLogged: false,
  onHasUserLogged: () => {},
  onLogout: () => {},
  profileClicked: false,
  onProfileClicked: () => {},
  homeClicked: false,
  onHomeClicked: () => {},
  currentUser: {},
  setCurrentUser: () => {},
  postUpdated: false,
  setPostUpdated: () => {},
  myPostsClicked: false,
  onMyPostsClicked: () => {},
});

export const StateContextProvider = (props) => {
  const [loginCLicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [hasUserLogged, setHasUserLogged] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);
  const [homeClicked, setHomeClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [postUpdated, setPostUpdated] = useState(false);
  const [myPostsClicked, setMyPostsClicked] = useState(false);

  const homeClickHandler = () => {
    setHomeClicked(true);
    setProfileClicked(false);
    setMyPostsClicked(false);
  };

  const profileClickedHandler = () => {
    setProfileClicked(true);
    setHomeClicked(false);
    setMyPostsClicked(false);
  };

  const myPostsClickedHandler = () => {
    setMyPostsClicked(true);
    setHomeClicked(false);
    setProfileClicked(false);
  };

  const loginClickedHandler = () => {
    setLoginClicked(true);
    setIsWelcome(false);
    setRegisterClicked(false);
  };
  const registerClickedHandler = () => {
    setRegisterClicked(true);
    setIsWelcome(false);
    setLoginClicked(false);
  };
  const homeHandler = () => {
    setIsWelcome(true);
    setLoginClicked(false);
    setRegisterClicked(false);
  };
  const hasUserLoggedHandler = () => {
    setHasUserLogged(true);
    setHomeClicked(true);
    setIsWelcome(false);
    setLoginClicked(false);
    setRegisterClicked(false);
  };
  const userLogoutHandler = () => {
    sessionStorage.clear();
    setHasUserLogged(false);
    setIsWelcome(true);
    setLoginClicked(false);
    setRegisterClicked(false);
  };
  return (
    <StateContext.Provider
      value={{
        loginCLicked: loginCLicked,
        onLogin: loginClickedHandler,
        registerClicked: registerClicked,
        onRegister: registerClickedHandler,
        isWelcome: isWelcome,
        onHome: homeHandler,
        hasUserLogged: hasUserLogged,
        onHasUserLogged: hasUserLoggedHandler,
        onLogout: userLogoutHandler,
        profileClicked: profileClicked,
        onProfileClicked: profileClickedHandler,
        homeClicked: homeClicked,
        onHomeClicked: homeClickHandler,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        postUpdated: postUpdated,
        setPostUpdated: setPostUpdated,
        myPostsClicked: myPostsClicked,
        onMyPostsClicked: myPostsClickedHandler,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
