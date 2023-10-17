import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, ErrorPage, DashboardPage } from "../pages";
import { ProtectedRoutes } from "../components";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};
