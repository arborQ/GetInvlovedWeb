import { createStore, combineReducers } from 'redux';
import { generate } from 'shortid';
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
      return merge({}, state, { messages : [...state.messages, { $id : generate(), message : action.data}] });
    }
    if(action.type === 'message.discard'){
      console.log(state.messages);
      console.log(action.ids.indexOf(action.ids[0]) === -1);
      return merge({}, state, { messages : state.messages.filter((i) => {return action.ids.indexOf(i.$id) === -1;}) });
    }
    return state;
  }
}));
