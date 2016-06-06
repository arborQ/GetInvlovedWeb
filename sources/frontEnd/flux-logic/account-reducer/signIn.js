import { set } from 'local-storage';
import { read } from 'jwt-client';

export default (state, action) => {
  let accountData = action.data;
  set('account-data', accountData);
  var tokenData = read(accountData);
  return tokenData.claim;
};
