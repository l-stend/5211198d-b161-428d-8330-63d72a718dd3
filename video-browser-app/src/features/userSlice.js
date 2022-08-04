import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoading: false,
};

const userSlice = {
  name: 'user',
  initialState,
};

export default userSlice.reducer;
