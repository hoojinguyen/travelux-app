import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, select, takeLatest } from 'redux-saga/effects';
import {
  authError,
  login,
  loginSuccess,
  logout,
  logoutSuccess,
} from '../slices';
import { LoginPayload } from '../types/authType';

export function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    yield delay(2000);
    yield put(loginSuccess({ accessToken: '123', refreshToken: '456' }));
  } catch (error: any) {
    yield put(authError(error?.message));
  }
}

export function* handleLogout() {
  try {
    const isLogged: boolean = yield select(state => state.auth.isLogged);
    if (isLogged) {
      yield put(logoutSuccess());
    }
  } catch (error: any) {
    yield put(authError(error?.message));
  }
}

export default [
  takeLatest(login.type, handleLogin),
  takeLatest(logout.type, handleLogout),
];
