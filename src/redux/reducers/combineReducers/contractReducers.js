import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getListContract = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_CONTRACT);
};
export const getContractDetail = (...props) => {
  return reducerDefault(...props, actions.GET_CONTRACT_DETAIL);
};
