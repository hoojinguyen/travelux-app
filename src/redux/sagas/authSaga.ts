import { PayloadAction } from '@reduxjs/toolkit';
import { showMessage } from 'react-native-flash-message';
import { put, takeLatest } from 'redux-saga/effects';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from '../../models/authType';
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

export function* handleSignIn({ payload }: PayloadAction<SignInRequest>) {
  try {
    const result: SignInResponse = yield authApi.signIn(payload);
    yield put(signInSuccess(result));
  } catch (error: any) {
    yield showMessage({
      message: 'Error',
      description: error?.message,
      type: 'danger',
      duration: 4000,
    });
    yield put(authError());
  }
}

export function* handleSignUp({ payload }: PayloadAction<SignUpRequest>) {
  try {
    const result: SignUpResponse = yield authApi.signUp(payload);
    yield put(signUpSuccess(result));
  } catch (error: any) {
    yield showMessage({
      message: 'Error',
      description: error?.message,
      type: 'danger',
      duration: 4000,
    });
    yield put(authError());
  }
}

export function* handleSignOut() {
  yield authApi.signOut();
  yield put(signOutSuccess());
}

export default [
  takeLatest(signIn.type, handleSignIn),
  takeLatest(signUp.type, handleSignUp),
  takeLatest(signOut.type, handleSignOut),
];
