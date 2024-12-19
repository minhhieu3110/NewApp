import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';

export default function* rootSaga() {
  yield all([fork(watchUserSagas)]);
}
