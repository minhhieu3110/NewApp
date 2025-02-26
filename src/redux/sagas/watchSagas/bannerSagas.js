import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onSuccess, _onFail} from 'redux/actions';

function* getBannerForNameCategory(action) {
  const {banner_name} = action.params;
  try {
    const res = yield api.get(`${URL_API.banner}/${banner_name}`);
  } catch (error) {}
}
