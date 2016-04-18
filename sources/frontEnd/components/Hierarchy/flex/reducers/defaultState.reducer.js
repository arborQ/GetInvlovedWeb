export default {
  canHandleAction : (state, action) => !state,
  reduce : (state, action) => {
    return {
      items : [
        { treeCode : '0-', name : 'root', $isOpen : true, $isHidden : true },
        { treeCode : '0-0-', name : 'first child', $isOpen : true, $isHidden : true },
        { treeCode : '0-0-0-', name : 'last child', $isOpen : false, $isHidden : true },
        { treeCode : '0-1-', name : 'ok', $isOpen : true, $isHidden : true }
      ]
    };
  }
}
