import actions, {_onSuccess, _onFail} from 'redux/actions';
import {put, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';
import {URL_API} from '../common';

function* getPayment(action) {
  try {
    const res = yield api.get(URL_API.method.payment);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(action.type);
    yield put({type: _onFail(action.type)});
  }
}
function* getShipping(action) {
  try {
    const res = yield api.get(URL_API.method.shipping);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(action.type);
    yield put({type: _onFail(action.type)});
  }
}
function* getStatusOrder(action) {
  try {
    const res = yield api.get(URL_API.order.status);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(action.type);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchOrderSagas() {
  yield takeLatest(actions.GET_PAYMENT, getPayment);
  yield takeLatest(actions.GET_SHIPPING, getShipping);
  yield takeLatest(actions.STATUS_ORDER, getStatusOrder);
}
