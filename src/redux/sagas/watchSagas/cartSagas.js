import actions, {_onSuccess, _onFail} from 'redux/actions';
import api from 'utils/api';
import {URL_API} from '../common';
import {put, select, takeLatest} from 'redux-saga/effects';
import {handleFormData} from 'utils/helper';

function* updateCartOfYou(action) {
  const body = yield handleFormData(action.body);
  const token = yield select(state => state.user.token);
  console.log('token', token);

  try {
    const res = yield api.patch(URL_API.cart, body, {
      device_token: token,
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
    yield put({type: _onFail(action.type)});
  }
}
export function* watchCartSagas() {
  yield takeLatest(actions.UPDATE_CART_OF_YOU, updateCartOfYou);
  yield takeLatest(actions.CART_OF_YOU, getCart);
}
