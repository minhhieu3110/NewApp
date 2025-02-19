import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getAbout = (...props) => {
  return reducerDefault(...props, actions.GET_ABOUT);
};
