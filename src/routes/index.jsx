import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage, RegisterPage, ErrorPage, DashboardPage } from "../pages";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
    toast.success("Você deslogou da sua conta");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} userLogout={userLogout} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
