import { set } from 'local-storage';

export default (state, action) => {
  let { token, profile } = action.data;
  set('auto0-account-data', token);
  return {
    isAuthenticated : true,
    login : profile.nickname,
    email : profile.email,
    roles : [ 'auth0' ]
  };
};
