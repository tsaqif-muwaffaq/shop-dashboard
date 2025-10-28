// src/router/PrivateRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../src/hooks/useAuth';
import { useAuth } from '../src/contexts/AuthContext';
import './styles.css';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
