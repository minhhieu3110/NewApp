import actions, {_onSuccess, _onFail1} from 'redux/actions';
import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import {handleFormData} from 'utils/helper';

function* updateCart(action) {
  const body = yield handleFormData(action.body);
  try {
    const res = yield api.postFormData(URL_API.cart, body, {
      device_token:
        'eyJpdiI6Imw2VWpROUtTQWhodUwzaTFvTWhJaHc9PSIsInZhbHVlIjoibGZ5S3EvbVdpQTJkcWY3RUdYZzJ5UXNTdXc2YnBtR1YvRzBVOUFTMWJtQlJPbjZlcFpaUXI0c3RydGdBSHpSVHVpcjAvWUtHclJXK3d2',
    });
    yield put({
      type: _onSuccess(actions.type),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail(action.type)});
  }
}
function* getCart(action) {
  try {
    const res = yield api.get(URL_API.cart, {
      device_token:
        '8rDRvj0AyxFeOTMGbWQL7OOXjeScoe3m6Tja2yWusdZ1QLQKOSt6CWrDsAti',
    });
    yield put({
      type: _onSuccess(actions.GET_CART),
      data: res.data,
    });
  } catch (error) {
    action._onFail?.(error);
    yield put({type: _onFail1(action.type)});
  }
}
export function* watchCartSagas() {
  yield takeLatest(actions.UPDATE_CART_OF_YOU, updateCart);
  yield takeLatest(actions.CART_OF_YOU, getCart);
}
