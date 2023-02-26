import React from "react";

const UserState = React.createContext({
  userData: {},
  setUserData: () => {},
});

export default UserState;
