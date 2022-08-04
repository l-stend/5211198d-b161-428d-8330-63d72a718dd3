import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';
import { logoutUser } from '../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Login
      <button onClick={() => dispatch(loginUser())}>Google Login</button>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default Login;
