import React, { useState } from "react";

const StateContext = React.createContext({
  hasUserLogged: false,
  onHasUserLogged: () => {},
  onLogout: () => {},
  currentUser: {},
  setCurrentUser: () => {},
  postUpdated: false,
  setPostUpdated: () => {},
});

export const StateContextProvider = (props) => {
  const [hasUserLogged, setHasUserLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [postUpdated, setPostUpdated] = useState(false);

  const hasUserLoggedHandler = () => {
    setHasUserLogged(true);
  };
  const userLogoutHandler = () => {
    sessionStorage.clear();
    setHasUserLogged(false);
  };
  return (
    <StateContext.Provider
      value={{
        hasUserLogged: hasUserLogged,
        onHasUserLogged: hasUserLoggedHandler,
        onLogout: userLogoutHandler,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        postUpdated: postUpdated,
        setPostUpdated: setPostUpdated,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
