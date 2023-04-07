import React, { useState } from "react";

const StateContext = React.createContext({
  postUpdated: false,
  setPostUpdated: () => {},
});

export const StateContextProvider = (props) => {
  const [postUpdated, setPostUpdated] = useState(false);

  return (
    <StateContext.Provider
      value={{
        postUpdated: postUpdated,
        setPostUpdated: setPostUpdated,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
