import {all, fork} from 'redux-saga/effects';
import {watchNewSagas} from './watchSagas/newSagas';
import {watchProductSagas} from './watchSagas/productSagas';
import {watchRecruitmentSagas} from './watchSagas/recruitmentSagas';
import {watchOtherSagas} from './watchSagas/otherSagas';
import {watchUserSagas} from './watchSagas/userSagas';
import {watchOrderSagas} from './watchSagas/orderSagas';
export default function* rootSaga() {
  yield all([
    fork(watchUserSagas),
    fork(watchNewSagas),
    fork(watchProductSagas),
    fork(watchRecruitmentSagas),
    fork(watchOtherSagas),
    fork(watchOrderSagas),
  ]);
}
