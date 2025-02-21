import {combineReducers} from 'redux';
import * as userReducers from './combineReducers/userReducers';
import * as addressBookReducers from './combineReducers/addressBookReduces';
import * as productReducers from './combineReducers/productReducers';
import * as newReducers from './combineReducers/newReducers';
import * as recruitmentReducers from './combineReducers/recruitmentReduces';
import * as uploadReducers from './combineReducers/uploadReduces';
import * as locationReducers from './combineReducers/locationReducers';
import * as aboutReducers from './combineReducers/aboutReducers';
import * as orderReducers from './combineReducers/orderReducers';
import * as catalogueReducers from './combineReducers/catalogueReducers';
import * as videoReducers from './combineReducers/videoReducers';
import * as voucherReducers from './combineReducers/voucherReducers';
import * as bannerReducers from './combineReducers/bannerReducers';
import * as contractReducers from './combineReducers/contractReducers';
import * as liabilityReducers from './combineReducers/liabilityReducers';
import * as pageReducers from './combineReducers/pageReducers';
import * as notificationReducers from './combineReducers/notificationReducers';
import * as otherReducers from './combineReducers/otherReducers';
import * as cartReducers from './combineReducers/cartReducers';
const rootReducer = combineReducers({
  ...userReducers,
  ...addressBookReducers,
  ...productReducers,
  ...newReducers,
  ...recruitmentReducers,
  ...uploadReducers,
  ...locationReducers,
  ...aboutReducers,
  ...orderReducers,
  ...catalogueReducers,
  ...videoReducers,
  ...voucherReducers,
  ...bannerReducers,
  ...contractReducers,
  ...liabilityReducers,
  ...pageReducers,
  ...notificationReducers,
  ...otherReducers,
  ...cartReducers,
});

export default rootReducer;
