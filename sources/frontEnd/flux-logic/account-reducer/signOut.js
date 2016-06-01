import { remove } from 'local-storage';
import { merge } from 'lodash';

import defaultAccount from './defaultState';

export default (state, action) => {
  remove('account-data');
  return defaultAccount;
};
