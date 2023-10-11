import { Route, Routes } from "react-router-dom";
import LoginPage from './../pages/LoginPage/index';
import RegisterPage from './../pages/RegisterPage/index';
import DashboardPage from './../pages/DashboardPage/index';

export default  () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/registerpage" element={<RegisterPage/>}/>
      <Route path="/dashboardpage" element={<DashboardPage/>}/>
    </Routes>
  );
};
