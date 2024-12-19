import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getGroupCatalogue = (...props) => {
  return reducerDefault(...props, actions.GET_CATEGORY_GROUP);
};
export const getCatalogueList = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_CATEGOR);
};
