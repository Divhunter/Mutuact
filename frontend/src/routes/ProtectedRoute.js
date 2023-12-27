import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Loader } from '../functions/loader/Loader';

const ProtectedRoute = ({ redirectPath = '/dashboard', children }) => {
  const { isAuthenticated, isLoading, user } = useContext(AuthContext);

  if (isLoading) {
    // Afficher un indicateur de chargement si le contexte est en cours de chargement
    return <Loader/>;
  }

  if (!isAuthenticated && user.role !== 'admin') {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
