import { Route, Routes } from "react-router-dom";
import { AdminRoutes } from "@routes/AdminRoutes";
import { UserRoutes } from "@routes/UserRoutes";
import { Role } from "./Types/backend";
import PrivateRoute from "@components/RequireAuth/PrivateRoute";
import { NotFoundPage } from "@containers/NotFound";
import { Login } from "@containers/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <PrivateRoute roles={[Role.ADMIN]}>
            <AdminRoutes />
          </PrivateRoute>
        }
      />
      <Route
        path="/user/*"
        element={
          <PrivateRoute roles={[Role.USER, Role.ADMIN]}>
            <UserRoutes />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
