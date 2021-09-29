import { PayloadAction } from '@reduxjs/toolkit';
import { showMessage } from 'react-native-flash-message';
import { put, select, takeLatest } from 'redux-saga/effects';
import { LoginPayload, Token } from '../../models/authType';
import authApi from '../../services/api/authApi';
import {
  authError,
  login,
  loginSuccess,
  logout,
  logoutSuccess,
} from '../slices';

export function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const result: Token = yield authApi.login(action.payload);
    yield put(loginSuccess(result));
  } catch (error: any) {
    yield showMessage({
      message: 'Error',
      description: error?.message,
      type: 'danger',
    });
    yield put(authError(error?.message));
  }
}

export function* handleLogout() {
  try {
    const isLogged: boolean = yield select(state => state.auth.isLogged);
    if (isLogged) {
      yield authApi.logout();
      yield put(logoutSuccess());
    }
  } catch (error: any) {
    yield showMessage({
      message: 'Error',
      description: error?.message,
      type: 'danger',
    });
    yield put(authError(error?.message));
  }
}

export default [
  takeLatest(login.type, handleLogin),
  takeLatest(logout.type, handleLogout),
];
