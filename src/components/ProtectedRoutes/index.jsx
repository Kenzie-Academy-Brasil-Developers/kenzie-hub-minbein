import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return user === false ? <Navigate to="/" /> : <Outlet />;
};
export default ProtectedRoutes;
