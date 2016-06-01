import { set } from 'local-storage';

export default (state, action) => {
  let accountData = action.data;
  set('account-data', accountData)
  return accountData;
};
