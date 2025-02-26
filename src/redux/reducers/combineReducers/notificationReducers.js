import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getAllNotification = (...props) => {
  return reducerDefault(...props, actions.GET_NOTIFICATION);
};
export const getNotificationDetail = (...props) => {
  return reducerDefault(...props, actions.GET_NOTIFICATION_DETAIL);
};
