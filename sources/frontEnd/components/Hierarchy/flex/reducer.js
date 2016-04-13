var defaultHierarchyState = {
  hierarchy : [
    { treeCode : '0-', name : 'root', isOpen : true },
    { treeCode : '0-0-', name : 'first child', isOpen : true },
    { treeCode : '0-0-0-', name : 'last child', isOpen : false },
    { treeCode : '0-1-', name : 'ok', isOpen : true }
  ]
}

export default function hierarchyReducer(state = defaultHierarchyState, action){
  switch (action.type) {
    case 'TOGGLE_COLLAPSE':
      return Object.assign({}, state, { hierarchy : state.hierarchy.map((item) => item.treeCode === action.treeCode ? Object.assign({}, item, {isOpen : !item.isOpen}) : item ) });
    default:
      return state;
  }
};
