import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "../pages/admin/Admin";
import { RoutesEnum } from "../types/routers";

export default function AppRouters() {
  return (
    <Routes>
      <Route path={RoutesEnum.ADMIN_MANAGE} element={<Admin />} />
      <Route path="*" element={<Navigate to={RoutesEnum.ADMIN_MANAGE} />} />
    </Routes>
  );
}
