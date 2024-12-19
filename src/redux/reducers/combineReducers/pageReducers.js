import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getPages = (...props) => {
  return reducerDefault(...props, actions.GET_NEW);
};
export const getPageDetail = (...props) => {
  return reducerDefault(...props, actions.GET_PAGE_DETAIL);
};
