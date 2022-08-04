import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Login
      <button onClick={() => dispatch(loginUser())}>Google Login</button>
    </div>
  );
};

export default Login;
