import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage } from '../utils/localStorage';

const ProtectedRoute = ({ children }) => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to='/login' />;
  }
  // const { user } = useSelector((state) => state.user);
  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login');
  //   }
  // }, []);

  return children;
};

export default ProtectedRoute;
