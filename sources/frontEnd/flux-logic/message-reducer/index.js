import { generate } from 'shortid';
import { merge, assign } from 'lodash';

import defaultData from './defaultState';
import fluxActions from '../flux-keys';

export default (state = defaultData, action) => {
  switch (action.type) {
    case fluxActions.messagePush:
      return merge({}, state, { messages : [...state.messages, { $id : generate(), message : action.data}] });
    case fluxActions.messageDiscard:
      let messages = state.messages.filter(i => !~action.data.indexOf(i.$id));
      return assign({}, state, { messages });
    default:
      return state;
  }
};
