import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import { RoutesEnum } from "../types/routers";

export default function AuthRouters() {
  return (
    <Routes>
      <Route path={RoutesEnum.LOGIN} element={<Login />} />
      <Route path="*" element={<Navigate to={RoutesEnum.LOGIN} />} />
    </Routes>
  );
}
