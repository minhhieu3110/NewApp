import {URL_API} from '../common';
import actions, {_onSuccess, _onFail} from 'redux/actions';
import {put, takeLatest} from 'redux-saga/effects';
import api from 'utils/api';

function* getProduct(action) {
  try {
    const res = yield api.get(URL_API.product_group.category);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getProductBestSeller(action) {
  try {
    const res = yield api.get(URL_API.product.product, {
      page: 1,
      limit: 6,
      filter: {bestseller: true},
    });

    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
export function* watchProductSagas() {
  yield takeLatest(actions.GET_PRODUCT_LIST, getProduct);
  yield takeLatest(actions.GET_PRODUCT_BEST_SELLER, getProductBestSeller);
}
