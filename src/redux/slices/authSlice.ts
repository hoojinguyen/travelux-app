import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../../models/authType';

const initialState: AuthState = {
  isLoading: false,
  isLogged: false,
  currentUser: null,
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInRequest>) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action: PayloadAction<SignInResponse>) => {
      state.isLoading = false;
      state.isLogged = true;
      state.currentUser = action.payload.currentUser;
      state.accessToken = action.payload.accessToken;
    },
    signUp: (state, action: PayloadAction<SignUpRequest>) => {
      state.isLoading = true;
    },
    signUpSuccess: (state, action: PayloadAction<SignUpResponse>) => {
      state.isLoading = false;
      state.isLogged = true;
      state.currentUser = action.payload.currentUser;
      state.accessToken = action.payload.accessToken;
    },
    signOut: state => {
      state.isLoading = true;
    },
    signOutSuccess: state => {
      state.isLoading = false;
      state.isLogged = false;
      state.currentUser = null;
      state.accessToken = '';
    },
    authError: state => {
      state.isLoading = false;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isLogged = !!action.payload;
      // state.currentUser = action.payload;
    },
  },
});

export const {
  signIn,
  signInSuccess,
  signOut,
  signOutSuccess,
  signUp,
  signUpSuccess,
  authError,
  setAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;
