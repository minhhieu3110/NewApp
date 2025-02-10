import {reducerDefault, reducerDevice} from 'redux/common/reducers';
import actions from 'redux/actions';

export const getBannerBrand = (...props) => {
  return reducerDefault(...props, actions.GET_BRAND_PARTNER);
};
export const getCertificate = (...props) => {
  return reducerDefault(...props, actions.GET_CERTIFICATE);
};
export const getVideo = (...props) => {
  return reducerDefault(...props, actions.GET_VIDEO);
};
export const getDevice = (...props) => {
  return reducerDevice(...props, actions.GET_TOKEN);
};
