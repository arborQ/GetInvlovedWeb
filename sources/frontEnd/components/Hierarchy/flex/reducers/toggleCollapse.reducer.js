import { ActionKeys } from '../actions';
export default {
  canHandleAction : (state, action) => action.type === ActionKeys.toggleCollapse,
  reduce : (state, action) => {
    return Object.assign({},
      state,
      {
        items : state.items
          .map((item) => item.treeCode === action.treeCode ? Object.assign({}, item, {$isOpen : !item.$isOpen}) : item )
        });
  }
}
