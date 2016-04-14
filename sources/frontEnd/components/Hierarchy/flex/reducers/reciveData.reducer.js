import { ActionKeys } from '../actions';
export default {
  canHandleAction : (state, action) => action.type === ActionKeys.dataRecived,
  reduce : (state, action) => {
    console.log('reduce dataRecived');
    return Object.assign({}, state, { hierarchy : action.hierarchy });
  }
}
