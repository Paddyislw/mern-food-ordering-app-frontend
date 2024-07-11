import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth0();

  //Outlet render all the child routes of this component if user is authenticated like a children prop
  return isAuthenticated ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoutes;
