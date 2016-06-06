import { set } from 'local-storage';

export default (state, action) => {
  let { token, profile } = action.data;
  set('auto0-account-data', token);

  var accountData = {
    isAuthenticated : true,
    login : profile.nickname,
    email : profile.email,
    roles : [ 'auth0' ]
  };
  set('auth0-account-claim', accountData);
  return accountData;
};
