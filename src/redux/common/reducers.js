import actions, {_onSuccess, _onFail, _onUnMount} from '../actions';
import {stateDefault} from './initialStates';

export const reducerDefault = (state = stateDefault, action, Action) => {
  switch (action.type) {
    case Action:
      return {...state, isLoading: true};
    case _onSuccess(Action):
        return {data: action.data,  isLoading: false}
    case _onFail(Action):
      return {...state, isLoading: false};
    case _onUnMount(Action):
      return {...stateDefault};
    default:
      return state;
  }
};
// export const reducerLoadMore = (state = ta)