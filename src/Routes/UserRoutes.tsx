import { UserDashboard } from '@containers/client/Dashboard';
import { NotFoundPage } from '@containers/NotFound';
import { Route, Routes } from 'react-router-dom';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
