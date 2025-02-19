import {put, select} from '@redux-saga/core/effects';
import api from 'utils/api';
import {_onSuccess, _onFail} from 'redux/actions';
export const ACCOUNT = {
  username: 'username',
  password: 'password',
};
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
  getDeviceToken: {
    getDeviceToken: 'device_token',
  },
  user: {
    getAddressBook: 'getAddressBook',
    addAddressBook: 'addAddressBook',
    updateAddressBook: 'updateAddressBook',
    deleteAddressBook: 'deleteAdddressBook',
    info: 'info',
    update: 'update',
    signup: 'user/signup',
    login: 'user/login',
    via: {
      google: 'google',
    },
    logout: 'logout',
    delete: 'delete',
    verify_password: 'verify_password',
    update_password: 'update_password',
    reset_password: 'reset_password',
    config: 'config',
  },
  product_group: {
    category: 'product_group/category',
  },
  product: {
    product: 'product',
    favorite: 'favorite',
    widhlist: 'wishlist',
    viewed: 'viewed',
  },
  review: 'review',
  news: 'news',
  recruitment: 'recruitment',
  uploads: 'uploads',
  location: 'location',
  about: 'about',
  order: {
    cacl: 'cacl',
    add: 'add',
    evaluate_complete: 'evaluate_complete',
    cancel: 'cancel',
    reason_cancel: 'reason_cancel',
  },
  cart: 'cart',
  method: {
    payment: 'method/payment',
    shipping: 'method/shipping',
  },
  catalogue_group: 'catalogue_group',
  catalogue: 'catalogue',
  video: 'video',
  voucher: {
    check: 'check',
    exchange: 'exchange',
  },
  banner_group: 'banner_group',
  contract: 'contract',
  liability: 'liability',
  page: 'page',
  notificatrion: 'notificatrion',
  banner: {
    brand: 'banner/brand',
  },
  location: 'location',
};
