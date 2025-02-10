import {put, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';
import actions, {_onFail, _onSuccess} from 'redux/actions';
import {URL_API} from '../common';
import {handleFormData} from 'utils/helper';
function* loginUser(action) {
  try {
    const res = yield api.postFormData(URL_API.user.login, body);
    yield put({
      type: actions.SAVE_USER_INFO,
      userToken: res.token,
    });
    yield put({
      type: _onSuccess(actions.type),
      data: res,
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
    const res = yield api.postData(URL_API.user.signup, body);
    yield put({
      type: _onSuccess(actions.type),
      data: res,
    });
    action.onSuceess?.(res);
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.SIGNIN, loginUser);
  yield takeLatest(actions.SIGNUP, registerUser);
}
