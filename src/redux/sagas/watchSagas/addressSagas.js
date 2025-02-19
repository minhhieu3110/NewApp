import {put, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../common';
import api from 'utils/api';
import actions, {_onSuccess, _onFail} from 'redux/actions';

function* getProvince(action) {
  try {
    const res = api.get(URL_API.location, action.params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data?.map(item => ({
        value: item.code,
        label: item.title,
      })),
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getDistrict(action) {
  try {
    const res = yield api.get(URL_API.location, action.params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data?.map(item => ({
        value: item.codde,
        label: item.title,
      })),
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getWard(action) {
  try {
    const res = yield api.get(URL_API.location, action.params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data?.map(item => ({
        value: item.code,
        label: item.title,
      })),
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchAddressSagas() {
  yield takeLatest(actions.GET_PROVINCE, getProvince);
  yield takeLatest(actions.GET_DISTRICT, getDistrict);
  yield takeLatest(actions.GET_WARD, getWard);
}
