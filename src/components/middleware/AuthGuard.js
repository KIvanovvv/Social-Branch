import React from "react";
import { Route, useNavigate } from "react-router-dom";

const AuthGuard = ({ component: Component, auth, ...rest }) => {
  const navigate = useNavigate();
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : navigate("/login")
    }
  />;
};

export default AuthGuard;
