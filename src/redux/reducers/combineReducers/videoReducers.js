import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getVideo = (...props) => {
  return reducerDefault(...props, actions.GET_VIDEO);
};
