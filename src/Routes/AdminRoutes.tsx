import { Route } from "react-router-dom";

export const AdminRoutes = () => {
  return <Route path="/admin/dashboard" element={<AdminDashboard />} />;
};

export const AdminDashboard = () => {
  return <div>AdminDashboard</div>;
};
