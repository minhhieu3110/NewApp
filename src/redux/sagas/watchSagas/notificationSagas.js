import {URL_API} from '../common';
import api from 'utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onSuccess, _onFail} from 'redux/actions';

function* getAllNotification(action) {
  try {
    const res = yield api.get(URL_API.notification);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: _onFail(action.type),
      error: error.message,
    });
  }
}
function* getDetailNotification(action) {
  try {
    const res = yield api.get(`${URL_API.notification}/${action.params}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    yield put({
      type: _onFail(action.type),
      error: error.message,
    });
  }
}
export function* watchNotificationSagas() {
  yield takeLatest(actions.GET_NOTIFICATION, getAllNotification);
  yield takeLatest(actions.GET_NOTIFICATION_DETAIL, getDetailNotification);
}
