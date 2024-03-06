import { Route, Routes } from "react-router-dom";
import PrivateRoute from "@components/RequireAuth/PrivateRoute";
import { AdminRoutes } from "@routes/AdminRoutes";
import { UserRoutes } from "@routes/UserRoutes";

//TODO adminRoutes and UserRoutes NotFound
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin/*"
        element={<PrivateRoute roles={["admin"]} element={<AdminRoutes />} />}
      />
      <Route
        path="/user/*"
        element={<PrivateRoute roles={["user"]} element={<UserRoutes />} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export const Login = () => {
  return <div>Login</div>;
};

export const NotFoundPage = () => {
  return <div>NotFound</div>;
};

export default App;
