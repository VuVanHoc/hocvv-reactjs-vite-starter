import AuthRouters from "./AuthRouters";
import AppRouters from "./AppRouters";
import useAuth from "../hooks/useAuthenticated";

export default function RootRouter() {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) return <AuthRouters />;

  return <AppRouters />;
}
