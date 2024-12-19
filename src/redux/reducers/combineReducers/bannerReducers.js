import actions from 'redux/actions';
import {reducerDefault} from 'redux/common/reducers';
export const getListCategoryBanner = (...props) => {
  return reducerDefault(...props, actions.GET_LIST_CATEGORY_BANNER);
};
export const getBannerForNameCategory = (...props) => {
  return reducerDefault(props, actions.GET_BANNER_FOR_NAME_CATEGORY);
};
