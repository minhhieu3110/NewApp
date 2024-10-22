import {all, fork} from 'redux-saga/effects'
import UserSagas from './Sagas/userSagas'
export default function* rootSaga(){
    yield all([
        fork(UserSagas)
    ])
}