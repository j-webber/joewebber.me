import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

export default function ProtectedRoute({ children }) {
  const { data: user, isLoading } = useAuthContext();
  const location = useLocation();
  if (isLoading) {
    return <div>Loading...</div>; // Or a loading component
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
