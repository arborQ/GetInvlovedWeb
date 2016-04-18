import { ActionKeys } from '../actions';

var calculateIsHidden = (treeCode, itemTreeCode, isOpen) => {
  if(treeCode === itemTreeCode){
    return false;
  }
  if(treeCode.indexOf(itemTreeCode)){
    return !isOpen;
  }
  return false;
};

export default {
  canHandleAction : (state, action) => action.type === ActionKeys.toggleCollapse,
  reduce : (state, action) => {
    return Object.assign({},
      state,
      {
        items : state.items
          .map((item) => item.treeCode === action.treeCode ? Object.assign({}, item, { $isOpen : !item.$isOpen, $isHidden : calculateIsHidden(item.treeCode, action.treeCode, !item.$isOpen) }) : item )
        });
  }
}
