import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserState from "../../state-ctx/userState.js";

const AuthGuard = () => {
  const { userData } = useContext(UserState);

  if (!userData.accessToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
