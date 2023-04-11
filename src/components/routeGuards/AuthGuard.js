import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  const userData = useSelector((state) => state.user.userData);

  if (!userData.accessToken) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
