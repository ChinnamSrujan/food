import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // While loading user session, show nothing (avoids flash redirect)
  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  // Not authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/users/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
