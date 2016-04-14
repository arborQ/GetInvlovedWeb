import { ActionKeys, FetchingState } from '../actions';
export default {
  canHandleAction : (state, action) => action.type === ActionKeys.fetching && (action.state === FetchingState.Compleated || action.state === FetchingState.Failed),
  reduce : (state, action) => {
    console.log('start end');
    return Object.assign({}, state, { isFetching : state.isFetching - 1 });
  }
}
