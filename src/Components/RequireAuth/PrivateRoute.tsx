import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./types";
import { usePermissions } from "src/contexts/AuthContext";

const PrivateRoute = ({ roles, children }: PrivateRouteProps) => {
  const { userRole } = usePermissions();

  if (!userRole || (roles && !roles.includes(userRole))) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
