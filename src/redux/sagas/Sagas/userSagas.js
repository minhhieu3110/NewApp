import {put, takeLatest} from 'redux-saga/effects';
import api from '../../../utils/api';
import actions, {_onSuccess} from '../../actions';
import {URL_API} from '../common';
function* signInUser(action) {
  try {
    const res = yield api.post(URL_API.user.login, action);
    yield put({
      type: _onSuccess(action.type),
      data: res,
    });
    action._onSuccess?.(res);
  } catch (error) {
    console.log(error);
  }
}
function* signUpUser(action) {
  try {
    const res = yield api.post(URL_API.user.signup, action);
    console.log(res);
    yield put({
      type: _onSuccess(action.type),
      data: res,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* UserSagas() {
  yield takeLatest(actions.LOGIN, signInUser);
  yield takeLatest(actions.REGISTER, signUpUser);
}
