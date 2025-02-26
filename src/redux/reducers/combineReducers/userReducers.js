import actions from '../../actions';
import {reducerDefault} from '../../common/reducers';
const initialState = {
  data: null,
  userToken: null,
  isLoading: false,
};
export const signInUser = (...props) => {
  return reducerDefault(...props, actions.SIGNIN);
};
export const signUpUser = (...props) => {
  return reducerDefault(...props, actions.SIGNUP);
};
export const logoutUser = (...props) => {
  return reducerDefault(...props, actions.LOGOUT);
};
export const deleteAccount = (...props) => {
  return reducerDefault(...props, actions.DELETE_ACCOUNT);
};
export const forgotPassword = (...props) => {
  return reducerDefault(...props, actions.FORGOT_PASSWORD);
};
export const changePassword = (...props) => {
  return reducerDefault(...props, actions.CHANGE_PASSWORD);
};
export const checkPassword = (...props) => {
  return reducerDefault(...props, actions.VERIFY_PASSWORD);
};
export const config = (...props) => {
  return reducerDefault(...props, actions.CONFIG);
};
export const getInfoUser = (...props) => {
  return reducerDefault(...props, actions.USER_INFO);
};
export const updateInfoUser = (...props) => {
  return reducerDefault(...props, actions.USER_UPDATE);
};
export const loginSocial = (...props) => {
  return reducerDefault(...props, actions.SINGIN_SOCIAL);
};
export const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_USER_INFO:
      return {...state, token: action.accessToken};
    case actions.UNMOUNT_USER:
      return initialState;
    default:
      return state;
  }
};
