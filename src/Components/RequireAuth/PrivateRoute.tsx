import { Navigate } from 'react-router-dom';
import { usePermissions } from 'src/contexts/AuthContext';

import { PrivateRouteProps } from './types';

export const PrivateRoute = ({ roles, children }: PrivateRouteProps) => {
  const { userRole } = usePermissions();

  if (!userRole || (roles && !roles.includes(userRole))) {
    return <Navigate to="/" replace />;
  }

  return children;
};
