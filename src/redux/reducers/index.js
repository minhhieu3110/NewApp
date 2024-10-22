import {combineReducers} from 'redux'
import * as userReducers from './combineReducers/userReducers'

const rootReducer = combineReducers({
    ...userReducers
})

export default rootReducer