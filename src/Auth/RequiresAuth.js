import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth-context";
export function RequiresAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return !isLoggedIn ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    children
  );
}
