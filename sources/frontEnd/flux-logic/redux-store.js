import { createStore, combineReducers } from 'redux';
import { generate } from 'shortid';
import { merge, assign } from 'lodash';
import { set, get, remove } from 'local-storage';

import accountReducer from './account-reducer';
import messageReducer from './message-reducer';

export default createStore(combineReducers({
  account : accountReducer,
  commounications : messageReducer
}));
