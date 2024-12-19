import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getListLiability = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_LIABILITY);
};
export const getLiabilityDetail = (...props) => {
  return reducerDefault(...props, actions.GET_LIABILITY_DETAIL);
};
