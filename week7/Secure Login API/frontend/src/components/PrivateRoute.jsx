
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// PrivateRoute - requires authentication
const PrivateRoute = ({ children }) => {

  const { isAuthenticated, loading } = useAuth();

  // Show loading screen
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Check authentication
  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
};

export default PrivateRoute;
