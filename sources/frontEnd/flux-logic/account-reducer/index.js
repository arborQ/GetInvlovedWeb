import { set, get, remove } from 'local-storage';
import { read } from 'jwt-client';

import defaultAccount from './defaultState';
import signIn from './signIn';
import signOut from './signOut';
import fluxActions from '../flux-keys';

var jwtToken = get('account-data');
var jwtClaim = !!jwtToken ? read(jwtToken) : null;

export default (state = !!jwtClaim ? jwtClaim.claim : defaultAccount, action) => {
  switch (action.type) {
    case fluxActions.signIn:
      return signIn(state, action);
    case fluxActions.signOut:
      return signOut(state, action);
    default:
      return state;
  }
};
