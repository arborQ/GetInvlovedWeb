var defaultHierarchyState = {
  hierarchy : [
    { treeCode : '0-', name : 'root', isOpen : true },
    { treeCode : '0-0-', name : 'first childXX', isOpen : true }
  ]
}

export default function hierarchyReducer(state = defaultHierarchyState, action){
  console.log(state)
  switch (action.type) {
    case 'TOGGLE_COLLAPSE':
      console.log('TOGGLE_COLLAPSE')
      return Object.assign({}, state, { hierarchy : state.hierarchy.map((item) => item.treeCode === action.treeCode ? Object.assign({}, item, {isOpen : !item.isOpen}) : item ) });
    default:
      return state;
  }
};
