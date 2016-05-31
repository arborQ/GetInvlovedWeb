import { createStore, combineReducers } from 'redux';
import { generate } from 'shortid';
import { merge, assign } from 'lodash';
import { set, get, remove } from 'local-storage';

var defaultAccount = { isAuthenticated : false, roles : [ 'anonymous' ] };

export default createStore(combineReducers({
  account : (state = get('account-data') || defaultAccount, action) =>{
    if(action.type === 'signIn.success'){
        let accountData = action.data;
        set('account-data', accountData)
        return merge({}, state, accountData);
    }else if(action.type === 'signOut'){
      remove('account-data');
      return merge({}, state, defaultAccount);
    }
    return state;
  },
  setup : (state = { messages : [] }, action ) => {

    switch (action.type) {
      case 'message.error':
        return merge({}, state, { messages : [...state.messages, { $id : generate(), message : action.data}] });
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
