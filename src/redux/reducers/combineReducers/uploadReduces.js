import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const upload = (...props) => {
  return reducerDefault(...props, actions.UPLOAD);
};
export const verifyUpload = (...props) => {
  return reducerDefault(...props, actions.VERIIFY_UPLOAD);
};
