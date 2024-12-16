import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
import * as productReducers from './combineReducers/productReducers';
const rootReducer = combineReducers({
  ...userReducers,
  ...productReducers,
});

export default rootReducer;
