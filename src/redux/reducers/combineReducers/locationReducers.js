import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getLocation = (...props) => {
  return reducerDefault(...props, actions.GET_LOCATION);
};
export const getLocationDetail = (...props) => {
  return reducerDefault(...props, actions.GET_LOCATION_DETAIL);
};
