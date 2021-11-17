import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../services/Context';

const ProtectedRoute = ({ component: Component }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    user ? <Component /> : <Redirect to="/" />
  );
};

export default ProtectedRoute;