import { set, get, remove } from 'local-storage';

import defaultAccount from './defaultState';
import signIn from './signIn';
import signOut from './signOut';
import fluxActions from '../flux-keys';

export default (state = get('account-data') || defaultAccount, action) => {
  switch (action.type) {
    case fluxActions.signIn:
      return signIn(state, action);
    case fluxActions.signOut:
      return signOut(state, action);
    default:
      return state;
  }
};
