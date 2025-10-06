import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

export default function ProtectedRoute() {
  const { data: user, isPending, isSuccess } = useAuthContext();
  const location = useLocation();
  if (isPending) {
    return <div>Loading...</div>; // Or a loading component
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
