import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorage';

const AuthenticateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const token = getLocalStorage('token');
  if (isAuthenticated) {
    return token ? <Outlet /> : <Navigate to="/signin" />;
  } else {
    return token ? <Navigate to="/" /> : <Outlet />;
  }
};

export default AuthenticateRoute;
