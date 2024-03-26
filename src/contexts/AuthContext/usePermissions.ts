import { useContext } from 'react';

import { AuthContext } from './AuthProvider';

export const usePermissions = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within AuthProvider');
  }

  return context;
};
