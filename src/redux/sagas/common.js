import {put, select} from '@redux-saga/core/effects';
import api from 'utils/api';
import {_onSuccess, _onFail} from 'redux/actions';
// export function* generalGet(config, action) {
//   try {
//     const defaultParams = config.defaultParams || {};
//     if (config.isNeedUser) {
//       const userToken = yield select(state => state.user.userToken);
//       defaultParams.user = userToken;
//     }
//     const res = yield api.get(config.url, {
//       ...defaultParams,
//       ...action(action.params || {}),
//     });
//     yield put({
//       type: _onSuccess(config.type),
//       data: res.data,
//     });
//     action.onSuccess?.(res.data);
//   } catch (error) {
//     action.onFail?.(error.data);
//     yield put({type: _onFail(action.type)});
//   }
// }
// export function* generalGetPaging(config, action) {
//   try {
//     const defaultParams = config.defaultParams || {};
//     if (config.isNeedUser) {
//       const userToken = yield select(state => state.user.userToken);
//       defaultParams.user = userToken;
//     }
//     const res = yield api.get(config.url, {
//       ...defaultParams,
//       ...(action.params || {}),
//     });
//     yield put({
//       type: _onSuccess(action.type),
//       data: res.data,
//       page: res.page,
//       totalPage: res.total_page,
//       numshow: res?.numshow,
//       total: res?.total,
//     });
//     action.onSuccess?.(res.data);
//   } catch (error) {
//     action.onFail?.(error.data);
//     yield put({type: _onFail(action.type)});
//   }
// }

export const URL_API = {
  user: {
    login: 'login',
    register: 'user/signup',
    update: 'update',
    via: {
      google: 'google',
      facebook: 'facebook',
    },
  },
  news: 'news',
};
