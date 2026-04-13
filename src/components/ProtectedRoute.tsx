import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem("user");

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;