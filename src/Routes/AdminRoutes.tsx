import { AdminDashboard } from '@containers/admin/Dashboard';
import { NotFoundPage } from '@containers/NotFound';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/notFound" />} />
      <Route path="/notFound" element={<NotFoundPage />} />
    </Routes>
  );
};
