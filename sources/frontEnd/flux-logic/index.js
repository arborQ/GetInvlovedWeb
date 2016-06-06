import Store from './redux-store';
import Keys from './flux-keys';

var dispatch = Store.dispatch.bind(Store);
var subscribe = Store.subscribe.bind(Store);
var getState = Store.getState.bind(Store);

export var Subscribe = subscribe;
export var GetState = getState;

export var SignInAction = (token) => {
  dispatch({ type : Keys.signIn, data : token });
};

export var Auth0SignInAction = (token, profile) => {
  dispatch({ type : Keys.auth0SignIn, data : { token, profile } });
};

export var SignOutAction = () => {
  dispatch({ type : Keys.signOut });
};

export var DisplayMessageAction = (message, type = 1) => {
  dispatch({ type : Keys.messagePush, data : message });
};

export var DiscardMessageActions = (ids) => {
  dispatch({ type : Keys.messageDiscard, data : ids });
};
