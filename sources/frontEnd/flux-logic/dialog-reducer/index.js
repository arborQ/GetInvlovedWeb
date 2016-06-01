import { generate } from 'shortid';
import { merge, assign } from 'lodash';

import defaultData from './defaultState';
import fluxActions from '../flux-keys';

export default (state = defaultData, action) => {
  switch (action.type) {
    case fluxActions.dialogPush:
      return merge({}, state, { dialogItems : [ { $id : generate(), content : action.data }, ...state.dialogItems ] });
    case fluxActions.dialogDiscard:
      return merge({}, state, { dialogItems : state.dialogItems.slice(1) });
    default:
      return state;
  }
};
