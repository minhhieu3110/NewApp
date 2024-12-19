import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchNewSagas} from './watchSagas/newSagas';

export default function* rootSaga() {
  yield all([fork(watchUserSagas), fork(watchNewSagas)]);
}
