import {put, select} from '@redux-saga/core/effects'
import api from '../../utils/api'
export const URL_API = {
    user: {
        login: 'login',
        signup: 'signup',
        update: 'update',
        via: {
            google: 'google',
            facebook: 'facebook'
        }
    }
    
}