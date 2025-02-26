import {put, select, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';
import actions, {_onFail, _onSuccess} from 'redux/actions';
import {URL_API} from '../common';
import {handleFormData} from 'utils/helper';
function* loginUser(action) {
  const body = yield handleFormData(action.body);
  try {
    const res = yield api.postFormData(URL_API.user.login, body);

    yield put({
      type: actions.SAVE_USER_INFO,
      accessToken: res.data.access_token,
    });
    yield put({
      type: _onSuccess(actions.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (err) {
    actions.onFail?.(err);
    yield put({
      type: _onFail(action.type),
    });
  }
}

function* registerUser(action) {
  const body = yield handleFormData(action.body);
  try {
    const res = yield api.postFormData(URL_API.user.signup, body);
    yield put({
      type: _onSuccess(actions.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* logout(action) {
  const accessToken = yield select(state => state.user.token);
  try {
    const res = yield api.post(URL_API.user.logout, {
      token: accessToken,
    });
    yield put({
      type: _onSuccess(actions.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchUserSagas() {
  yield takeLatest(actions.SIGNIN, loginUser);
  yield takeLatest(actions.SIGNUP, registerUser);
  yield takeLatest(actions.LOGOUT, logout);
}
