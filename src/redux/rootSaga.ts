import { all } from 'redux-saga/effects';
import authSaga from './sagas/authSaga';
import counterSaga from './sagas/counterSaga';

export default function* rootSaga() {
  yield all([...authSaga, ...counterSaga]);
}
