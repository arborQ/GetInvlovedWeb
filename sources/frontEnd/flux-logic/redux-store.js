import { createStore, combineReducers } from 'redux';
import { generate } from 'shortid';
import { merge, assign } from 'lodash';

export default createStore(combineReducers({
  account : (state = { isAuthenticated : false, roles : [ 'anonymous' ] }, action) =>{
    if(action.type === 'signIn.success'){
        return merge({}, state, { isAuthenticated : true, login : 'arbor', email : 'arbor@o2.pl', roles : [ 'admin' ] });
    }
    return state;
  },
  setup : (state = { messages : [] }, action ) => {

    switch (action.type) {
      case 'message.success':
        return merge({}, state, { messages : [...state.messages, { $id : generate(), message : action.data}] });
      case 'message.discard':
        let messages = state.messages.filter((i) => {return action.ids.indexOf(i.$id) === -1;});
        return assign({}, state, { messages });
      default:
        return state;
    }
  }
}));
