import actions, {_onSuccess, _onFail} from 'redux/actions';
import {put, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';
import {URL_API, ACCOUNT} from '../common';
import queryString from 'query-string';
function* getBannerBrand(action) {
  try {
    const res = yield api.get(URL_API.banner.brand);
    console.log('brand', res.data);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getCertificate(action) {
  try {
    const {type} = action.params;
    const res = yield api.get(URL_API.about, {type: type});
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getVideo(action) {
  try {
    const res = yield api.get(URL_API.video);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getCatalogueGroup(action) {
  try {
    const res = yield api.get(URL_API.catalogue_group);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getCatalogueList(action) {
  const group_id = action.params;
  try {
    const res = yield api.get(URL_API.catalogue, {
      group_id: group_id,
    });
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action.onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchOtherSagas() {
  yield takeLatest(actions.GET_BRAND_PARTNER, getBannerBrand);
  yield takeLatest(actions.GET_CERTIFICATE, getCertificate);
  yield takeLatest(actions.GET_VIDEO, getVideo);
  yield takeLatest(actions.GET_CATALOGUE_GROUP, getCatalogueGroup);
  yield takeLatest(actions.GET_LIST_CATALOGUE, getCatalogueList);
}
