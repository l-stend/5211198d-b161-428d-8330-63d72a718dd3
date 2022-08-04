import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/userSlice';
import { logoutUser } from '../features/userSlice';

const Login = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [user]);
  return (
    <div>
      Login
      <button onClick={() => dispatch(loginUser())}>Google Login</button>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default Login;
