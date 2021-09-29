import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginPayload, Token } from '../../models/authType';

const initialState: AuthState = {
  isLoading: false,
  isLogged: false,
  accessToken: '',
  refreshToken: '',
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<Token>) => {
      state.isLoading = false;
      state.isLogged = true;
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
    },
    logout: state => {
      state.isLoading = true;
    },
    logoutSuccess: state => {
      state.isLoading = false;
      state.isLogged = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.errorMessage = undefined;
    },
    authError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const { login, loginSuccess, logout, logoutSuccess, authError } =
  authSlice.actions;

export default authSlice.reducer;
