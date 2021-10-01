import { PayloadAction } from '@reduxjs/toolkit';
import { showMessage } from 'react-native-flash-message';
import { put, select, takeLatest } from 'redux-saga/effects';
import { SignInPayload, Token } from '../../models/authType';
import authApi from '../../services/api/authApi';
import {
  authError,
  signIn,
  signInSuccess,
  signOut,
  signOutSuccess,
  signUp,
  signUpSuccess,
} from '../slices';
import { SignUpPayload, User } from './../../models/authType';

export function* handleSignIn(action: PayloadAction<SignInPayload>) {
  try {
    const result: Token = yield authApi.signIn(action.payload);
    yield put(signInSuccess(result));
  } catch (error: any) {
    yield showMessage({
      message: 'Error',
      description: error?.message,
      type: 'danger',
    });
    yield put(authError(error?.message));
  }
}

export function* handleSignUp(action: PayloadAction<SignUpPayload>) {
  try {
    const result: User = yield authApi.signUp(action.payload);
    yield put(signUpSuccess());
    if (result) {
      yield handleSignIn({
        type: signIn.type,
        payload: {
          email: action.payload.email,
          password: action.payload.password,
        },
      });
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

export function* handleSignOut() {
  try {
    const isLogged: boolean = yield select(state => state.auth.isLogged);
    if (isLogged) {
      yield authApi.signOut();
      yield put(signOutSuccess());
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
  takeLatest(signIn.type, handleSignIn),
  takeLatest(signUp.type, handleSignUp),
  takeLatest(signOut.type, handleSignOut),
];
