import {put, takeLatest} from 'redux-saga/effects';
import {URL_API} from '../common';
import api from 'utils/api';
import actions, {_onSuccess, _onFail} from 'redux/actions';
function* getNew(action) {
  try {
    const res = yield api.get(URL_API.news);
    yield put({
      type: _onSuccess(action.type),
      data: res,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}

export function* watchNewSagas() {
  yield takeLatest(actions.GET_NEW, getNew);
}
