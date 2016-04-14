import { ActionKeys, FetchingState } from '../actions';
export default {
  canHandleAction : (state, action) => action.type === ActionKeys.fetching && action.state === FetchingState.InProgress,
  reduce : (state, action) => {
    console.log('start fetching');
    return Object.assign({}, state, { isFetching : state.isFetching + 1 });
  } 
}
