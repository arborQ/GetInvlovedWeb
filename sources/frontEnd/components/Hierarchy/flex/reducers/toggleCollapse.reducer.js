import { ActionKeys } from '../actions';
export default {
  canHandleAction : (state, action) => action.type === ActionKeys.toggleCollapse,
  reduce : (state, action) => {
    console.log('reduce toggle');
    return Object.assign({},
      state,
      {
        hierarchy : state.hierarchy
          .map((item) => item.treeCode === action.treeCode ? Object.assign({}, item, {$isOpen : !item.$isOpen}) : item )
        });
  }
}
