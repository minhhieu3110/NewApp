import actions from '../../actions';
import {reducerDefault} from '../../common/reducers';
const initialState = {
  data: null,
  userToken: null,
  isLoading: false,
};
export const signInUser = (...props) => {
  return reducerDefault(...props, actions.USER_LOGIN);
};
export const signUpUser = (...props) => {
  return reducerDefault(...props, actions.USER_REGISTER);
};
export const logoutUser = (...props) => {
  return reducerDefault(...props, actions.USER_LOGOUT);
};
export const deleteAccount = (...props) => {
  return reducerDefault(...props, actions.USER_DELETE_ACCOUNT);
};
export const forgotPassword = (...props) => {
  return reducerDefault(...props, actions.USER_FORGOT_PASSWORD);
};
export const changePassword = (...props) => {
  return reducerDefault(...props, actions.USER_CHANGE_PASSWORD);
};
export const checkPassword = (...props) => {
  return reducerDefault(...props, actions.USER_CHECK_PASSWORD);
};
export const config = (...props) => {
  return reducerDefault(...props, actions.USER_CONFIG);
};
export const getInfoUser = (...props) => {
  return reducerDefault(...props, actions.USER_GET_INFO);
};
export const updateInfoUser = (...props) => {
  return reducerDefault(...props, actions.USER_UPDATE_INFO);
};
export const getAddressbook = (...props) => {
  return reducerDefault(...props, actions.USER_GET_ADDRESSBOOK);
};
export const addAddressbook = (...props) => {
  return reducerDefault(...props, actions.USER_ADD_ADDESSBOOK);
};
export const updateAddressbook = (...props) => {
  return reducerDefault(...props, actions.USER_UPDATE_ADDRESSBOOK);
};
export const deleteAddressbook = (...props) => {
  return reducerDefault(...props, actions.USER_DELETE_ADDRESSBOOK);
};
export const loginSocial = (...props) => {
  return reducerDefault(...props, actions.LOGIN_SOCIAL);
};
