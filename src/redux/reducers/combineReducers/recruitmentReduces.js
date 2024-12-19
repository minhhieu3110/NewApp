import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getRecruitment = (...props) => {
  return reducerDefault(...props, actions.GET_RECRUITMENT);
};
export const getRecruitmentDetail = (...props) => {
  return reducerDefault(...props, actions.GET_RECRUITMENT_DETAIL);
};
