import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
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
