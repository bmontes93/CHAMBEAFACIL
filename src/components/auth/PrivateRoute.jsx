import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  
  if (!token || !userStr) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userStr);

  if (role && user.role !== role) {
    // Redirect to their appropriate dashboard if they have the wrong role
    return <Navigate to={user.role === 'COMPANY' ? '/dashboard/company' : '/dashboard/worker'} replace />;
  }

  return children;
};
