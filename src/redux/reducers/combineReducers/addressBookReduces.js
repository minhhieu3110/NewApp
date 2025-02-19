import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
const initialState = {
  data: null,
  isLoading: false,
};
export const getAddressBook = (...props) => {
  return reducerDefault(...props, actions.GET_ADDRESS_BOOK);
};
export const addAddressBook = (...props) => {
  return reducerDefault(...props, actions.ADD_ADDRESS_BOOK);
};
export const updateAddressBook = (...props) => {
  return reducerDefault(...props, actions.UPDATE_ADDRESS_BOOK);
};
export const deleteAddressBook = (...props) => {
  return reducerDefault(...props, actions.DELETE_ADDRESS_BOOK);
};
export const getProvince = (...props) => {
  return reducerDefault(...props, actions.GET_PROVINCE);
};
export const getDistrict = (...props) => {
  return reducerDefault(...props, actions.GET_DISTRICT);
};
export const getWard = (...props) => {
  return reducerDefault(...props, actions.GET_WARD);
};
