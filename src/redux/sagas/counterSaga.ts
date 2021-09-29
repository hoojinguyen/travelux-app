import { delay, put, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from '../slices/counterSlice';

export function* handleIncrementSaga() {
  yield delay(2000);
  yield put(incrementSagaSuccess());
}

export default [takeLatest(incrementSaga.type, handleIncrementSaga)];
