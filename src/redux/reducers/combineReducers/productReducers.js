import actions from '../../actions';
import {reducerDefault, reducerLoadMore} from '../../common/reducers';
const initialState = {
  data: null,
  isLoading: false,
};
export const getProductsList = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCTS_LIST);
};
export const getDetailProduct = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_PRODUCT);
};
export const getGroupCategoryProduct = (...props) => {
  return reducerDefault(...props, actions.GET_GROUP_CATEGORY_PRODUCT);
};
export const getDetailProductGroup = (...props) => {
  return reducerDefault(...props, actions.GET_DETAIL_PRODUCT_GROUP);
};
export const getProductFilters = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_FILTERS);
};
export const getProductForYou = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCT_FOR_YOU);
};
export const getProductYouLiked = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_YOU_LIKED);
};
export const getProductRelated = (...props) => {
  return reducerDefault(...props, actions.GET_PRODUCT_RELATED);
};
export const getProductsYouViewed = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCTS_YOU_VIEWED);
};
export const getProductsYouSaved = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCTS_YOU_SAVED);
};
export const getProductsTopRate = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCTS_TOP_RATE);
};
export const getProductsBestSeller = (...props) => {
  return reducerLoadMore(...props, actions.GET_PRODUCTS_BESTSELLER);
};
export const checkFavorites = (...props) => {
  return reducerDefault(...props, actions.CHECK_FAVORITES);
};
export const checkSaved = (...props) => {
  return reducerDefault(...props, actions.CHECK_SAVED);
};
export const favoritesProduct = (...props) => {
  return reducerDefault(...props, actions.FAVORITES_PRODUCT);
};
export const saveProduct = (...props) => {
  return reducerDefault(...props, actions.SAVE_PRODUCT);
};
export const removeProductViewed = (...props) => {
  return reducerDefault(...props, actions.REMOVE_PRODUCT_VIEWED);
};
