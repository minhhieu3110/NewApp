import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
const initialStates = {
  data: null,
  isLoading: false,
};
export const updateCart = (...props) => {
  return reducerDefault(...props, actions.UPDATE_CART_OF_YOU);
};
export const getCart = (...props) => {
  return reducerDefault(...props, actions.CART_OF_YOU);
};
