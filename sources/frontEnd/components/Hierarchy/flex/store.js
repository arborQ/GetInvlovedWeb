import { createStore } from 'redux';
import hierarchyReducer from './reducer';

import defaultReducer from './reducers/defaultState.reducer';
import toggleReducer from './reducers/toggleCollapse.reducer';
import endFetching from './reducers/endFetching.reducer';
import startFetching from './reducers/startFetching.reducer';
import reciveData from './reducers/reciveData.reducer';

var reducer = new hierarchyReducer([ defaultReducer, toggleReducer, startFetching, endFetching, reciveData ]);
let store = createStore(reducer.reduce)

export default store;
