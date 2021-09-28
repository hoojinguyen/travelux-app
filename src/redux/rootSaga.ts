import { all } from 'redux-saga/effects';
import counterSaga from './sagas/counterSaga';

export default function* rootSaga() {
  yield all([...counterSaga]);
}
