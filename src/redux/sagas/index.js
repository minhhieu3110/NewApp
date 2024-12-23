import {all, fork} from 'redux-saga/effects';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchNewSagas} from './watchSagas/newSagas';
import {watchProductSagas} from './watchSagas/productSagas';
import {watchRecruitmentSagas} from './watchSagas/recruitmentSagas';
export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchNewSagas),
    fork(watchProductSagas),
    fork(watchRecruitmentSagas),
  ]);
}
