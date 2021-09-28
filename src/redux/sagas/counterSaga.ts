import { delay, put, takeLatest } from 'redux-saga/effects';
import {
  incrementSaga,
  incrementSaga10,
  incrementSaga10Success,
  incrementSagaSuccess,
} from '../slices/counterSlice';

export function* increment5() {
  yield delay(2000);
  yield put(incrementSagaSuccess());
}
export function* increment10() {
  yield delay(500);
  yield put(incrementSaga10Success());
}

export default [
  takeLatest(incrementSaga.type, increment5),
  takeLatest(incrementSaga10.type, increment10),
];
