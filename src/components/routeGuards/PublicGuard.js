import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicGuard = () => {
  const userData = useSelector((state) => state.user.userData);

  if (userData.accessToken) {
    return <Navigate to={"/home"} replace />;
  }

  return <Outlet />;
};

export default PublicGuard;
