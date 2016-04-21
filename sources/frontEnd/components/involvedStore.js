import { createStore, combineReducers } from 'redux';
import { merge } from 'lodash';

export var store = createStore(combineReducers({
  account : (state = { isAuthenticated : false, roles : [ 'anonymous' ] }, action) =>{
    if(action.type === 'signIn.success'){
        return merge({}, state, { isAuthenticated : true, login : 'arbor', email : 'arbor@o2.pl', roles : [ 'admin' ] });
    }
    return state;
  },
  setup : (state = { messages : [] }, action ) => {
    if(action.type === 'message.success'){
      return merge({}, state, { messages : [...state.messages, action.data] });
    }
    return state;
  }
}));
