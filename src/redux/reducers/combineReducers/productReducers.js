import actions from '../../actions';
import {reducerDefault, reducerLoadMore} from '../../common/reducers';
const initialState = {
  data: null,
  isLoading: false,
};
export const getProductsList = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_LIST);
};
export const getDetailProduct = (...props) => {
  return reducerLoadMore(...props, actions.GET_DETAIL_PRODUCT);
};
export const getGroupCategoryProduct = (...props) => {
  return reducerDefault(...props, actions.GET_CATEGORY_GROUP);
};
export const getDetailProductGroup = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_CATEGORY);
};
// export const getProductFilters = (...props) => {
//   return reducerDefault(...props, actions.GET_PRODUCT_FILTERS);
// };
// export const getProductForYou = (...props) => {
//   return reducerLoadMore(...props, actions.GET_PRODUCT_FOR_YOU);
// };
// export const getProductYouLiked = (...props) => {
//   return reducerDefault(...props, actions.GET_PRODUCT_FAVORITE);
// };
export const getProductRelated = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_RELATED);
};
export const getProductsYouViewed = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCT_SEEN);
};
export const getProductsYouSaved = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCT_SAVE);
};
export const getProductsTopRate = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCT_TOP_RATE);
};
export const getProductsBestSeller = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCT_BEST_SELLER);
};
export const checkFavorites = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_FAVORITE);
};
export const checkSaved = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_SAVE);
};
export const favoritesProduct = (...props) => {
  return reducerDefault(...props, actions.PRODUCT_FAVORITE);
};
export const saveProduct = (...props) => {
  return reducerDefault(...props, actions.PRODUCT_SAVE);
};
export const removeProductViewed = (...props) => {
  return reducerDefault(...props, actions.DELETE_PRODUCT_SEEN);
};
