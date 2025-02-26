import {reducerDefault, reducerDevice} from 'redux/common/reducers';
import actions from 'redux/actions';
export const getCertificate = (...props) => {
  return reducerDefault(...props, actions.GET_CERTIFICATE);
};
export const getVideo = (...props) => {
  return reducerDefault(...props, actions.GET_VIDEO);
};
export const getDevice = (...props) => {
  return reducerDevice(...props, actions.GET_TOKEN);
};
export const getBanner = (...props) => {
  return reducerDefault(...props, actions.GET_BANNER);
};
