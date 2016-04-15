import { createStore, combineReducers, applyMiddleware } from 'redux';
import hierarchyReducer from './reducer';

import defaultReducer from './reducers/defaultState.reducer';
import toggleReducer from './reducers/toggleCollapse.reducer';
import fetching from './reducers/fetching.reducer';
import reciveData from './reducers/reciveData.reducer';

function logger({ getState }) {
  return (next) => (action) => {
    console.log('will dispatch', action)
    let returnValue = next(action)
    console.log('state after dispatch', getState())
    return returnValue
  }
}

var reducer = new hierarchyReducer([ defaultReducer, toggleReducer, reciveData ]);
let store = createStore(combineReducers({
  fetching,
  hierarchy : reducer.reduce
}), applyMiddleware(logger));

export default store;
