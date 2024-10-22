import actions from '../../actions';
import {reducerDefault} from '../../common/reducers';
const initialState = {
  data: null,
  userToken: null,
  isLoading: false,
};
export const signInUser =(...props)=>{
    return reducerDefault(...props, actions.LOGIN)
}