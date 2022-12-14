import { firebaseConfig } from '../firebase-config';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  addUserToLocalStorage,
  addTokenToLocalStorage,
  removeUserFromLocalStorage,
  removeTokenFromLocalStorage,
} from '../utils/localStorage';
import { toast } from 'react-toastify';

//variables
const initialState = {
  user: null,
  isLoading: false,
};
const provider = new GoogleAuthProvider();

//login function
export const loginUser = createAsyncThunk(
  'action/loginUser',
  async (_, ThunkAPI) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { refreshToken, providerData } = user;
      return user;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: () => {
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
      toast.success('Logout successful');
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.providerData;
      addUserToLocalStorage(state.user);
      addTokenToLocalStorage(payload.refreshToken);
      toast('Log in Successful');
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = true;
      toast.error('Login failed');
    },
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
