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
});

export const StateContextProvider = (props) => {
  const [loginCLicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [hasUserLogged, setHasUserLogged] = useState(false);

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
    setIsWelcome(false);
    setLoginClicked(false);
    setRegisterClicked(false);
  };
  const userLogoutHandler = () => {
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
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
