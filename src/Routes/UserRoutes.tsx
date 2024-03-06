import { Route } from "react-router-dom";

export const UserRoutes = () => {
  return <Route path="/user/dashboard" element={<UserDashboard />} />;
};

export const UserDashboard = () => {
  return <div>UserDashboard</div>;
};
