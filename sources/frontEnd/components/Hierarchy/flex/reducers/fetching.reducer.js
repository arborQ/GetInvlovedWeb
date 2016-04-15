import { ActionKeys, FetchingState } from '../actions';
var defaultState = { counter : 0, lastUpdate : null };
export default function(state = defaultState, action) {
  if(action.type === ActionKeys.fetching){
    return Object.assign({}, state, { counter : state.counter + (action.begin ? 1 : -1) });
  }else{
    return state;
  }
}
