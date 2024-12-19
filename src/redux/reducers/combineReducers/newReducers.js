import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getNew = (...props) => {
  return reducerDefault(...props, actions.GET_NEW);
};
export const getNewDetail = (...props) => {
  return reducerDefault(...props, actions.GET_NEW_DETAIL);
};
