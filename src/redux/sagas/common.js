import {put, select} from '@redux-saga/core/effects';
import api from '../../utils/api';

export const URL_API = {
  user: {
    login: 'login',
    register: 'register',
    update: 'update',
    via: {
      google: 'google',
      facebook: 'facebook',
    },
  },
};
