import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../services/Context';

function ProtectedRoute({ component: Component }) {
  const { user } = useContext(AuthContext);

  return (
    user ? <Component /> : <Redirect to="/" />
  );
}

export default ProtectedRoute;
