// src/routes/Protected.tsx
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Protected: React.FC = () => {
  // const { user, loading } = useAuth();
  const {user} = useAuth();
  const loc = useLocation();

  // if (loading) return null;           // or a loader
  if (!user) return <Navigate to="/login" replace state={{ from: loc.pathname }} />;

  return <Outlet />;
};

export default Protected;
