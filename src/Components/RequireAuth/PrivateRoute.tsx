import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./types";
import { usePermissions } from "src/contexts/AuthContext";

const PrivateRoute = ({ roles, element }: PrivateRouteProps) => {
  const { userRole } = usePermissions();

  if (!userRole || (roles && !roles.includes(userRole))) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
