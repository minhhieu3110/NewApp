import actions, {_onSuccess, _onFail} from 'redux/actions';
import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
function* getRecruitment(action) {
  try {
    const res = yield api.get(URL_API.recruitment);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getRecruitmentDetail(action) {
  try {
    const {item_id} = action.params;
    const res = yield api.get(`${URL_API.recruitment}/${item_id}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchRecruitmentSagas() {
  yield takeLatest(actions.GET_RECRUITMENT, getRecruitment);
  yield takeLatest(actions.GET_RECRUITMENT_DETAIL, getRecruitmentDetail);
}
