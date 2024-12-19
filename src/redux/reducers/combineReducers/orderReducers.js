import actions from 'redux/actions';
import {reducerDefault, reducerDevice} from 'redux/common/reducers';

export const getOrderOfYou = (...props) => {
  return reducerDefault(...props, actions.ORDER_OF_YOU);
};
export const getCartOfYou = (...props) => {
  return (
    reducerDefault(...props, actions.CART_OF_YOU),
    reducerDevice(...props, actions.CART_OF_YOU)
  );
};
export const updateCartOfYou = (...props) => {
  return (
    reducerDefault(...props, actions.UPDATE_CART_OF_YOU),
    reducerDevice(...props, actions.UPDATE_CART_OF_YOU)
  );
};
export const calculateOrder = (...props) => {
  return (
    reducerDefault(...props, actions.CACL_ORDER),
    reducerDevice(...props, actions.CACL_ORDER)
  );
};
export const createOrder = (...props) => {
  return (
    reducerDefault(...props, actions.CREATE_ORDER),
    reducerDevice(...props, actions.CREATE_ORDER)
  );
};
export const evaluateOrder = (...props) => {
  return reducerDefault(...props, actions.EVALUATE_COMPLETE);
};
export const cancelOrder = (...props) => {
  return reducerDefault(...props, actions.CANCEL_ORDER);
};
export const getPayment = (...props) => {
  return reducerDefault(...props, actions.GET_PAYMENT);
};
export const getShipping = (...props) => {
  return reducerDefault(...props, actions.GET_SHIPPING);
};
export const getReasonOrder = (...props) => {
  return reducerDefault(...props, actions.REASON_ORDER);
};
export const getStatusOrder = (...props) => {
  return reducerDefault(...props, actions.STATUS_ORDER);
};
