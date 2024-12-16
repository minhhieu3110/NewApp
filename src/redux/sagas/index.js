import {all, fork} from 'redux-saga/effects';
import UserSagas from './watchSagas/userSagas';
export default function* rootSaga() {
  yield all([fork(UserSagas)]);
}
