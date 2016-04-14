export default {
  canHandleAction : (state, action) => !state,
  reduce : (state, action) => {
    console.log('reduce default value');
    return {
      isFetching : 0,
      hierarchy : [
        { treeCode : '0-', name : 'root', $isOpen : true },
        { treeCode : '0-0-', name : 'first child', $isOpen : true },
        { treeCode : '0-0-0-', name : 'last child', $isOpen : false },
        { treeCode : '0-1-', name : 'ok', $isOpen : true }
      ]
    };
  }
}
