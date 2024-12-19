import actions from 'redux/actions';
import {reducerDefault, reducerDevice} from 'redux/common/reducers';
export const getVoucherList = (...props) => {
  return reducerDefault(...props, actions.GET_VOUCHER);
};
export const checkVoucher = (...props) => {
  return (
    reducerDefault(...props, actions.CHECK_VOUCHER),
    reducerDevice(...props, actions.CHECK_VOUCHER)
  );
};
export const getListVoucherCanExchange = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_VOUCHER_CAN_EXCHANGE);
};
export const convertPoimtIntoCodes = (...props) => {
  return reducerDefault(...props, actions.CONVERT_POINTS_INTO_CODE);
};
export const getVoucherListExchanged = (...props) => {
  return reducerDefault(...props, actions.GET_VOUCHER_LIST_EXCHANGED);
};
