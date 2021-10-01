import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState,
  SignInPayload,
  SignUpPayload,
  Token,
} from '../../models/authType';

const initialState: AuthState = {
  isLoading: false,
  isLogged: false,
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<SignInPayload>) => {
      state.isLoading = true;
    },
    signInSuccess: (state, action: PayloadAction<Token>) => {
      state.isLoading = false;
      state.isLogged = true;
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
    },
    signOut: state => {
      state.isLoading = true;
    },
    signOutSuccess: state => {
      state.isLoading = false;
      state.isLogged = false;
      state.accessToken = '';
      state.refreshToken = '';
    },
    signUp: (state, action: PayloadAction<SignUpPayload>) => {
      state.isLoading = true;
    },
    signUpSuccess: state => {
      state.isLoading = false;
    },
    authError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
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
} = authSlice.actions;

export default authSlice.reducer;
