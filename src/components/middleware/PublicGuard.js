import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserState from "../../state-ctx/userState.js";

const PublicGuard = () => {
  const { userData } = useContext(UserState);

  if (userData.accessToken) {
    return <Navigate to={"/home"} replace />;
  }

  return <Outlet />;
};

export default PublicGuard;
