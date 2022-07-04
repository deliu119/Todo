import {all, fork} from 'redux-saga/effects';
import usersSaga from '../pages/Users/saga';

export default function* rootSaga() {
  yield all([
    fork(usersSaga),
  ]);
}