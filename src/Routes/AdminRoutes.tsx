import { AdminDashboard } from '@containers/admin/Dashboard';
import { NotFoundPage } from '@containers/NotFound';
import { Route, Routes } from 'react-router-dom';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
