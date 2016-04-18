jest.unmock('../sources/frontEnd/components/hierarchy/flex/reducers/toggleCollapse.reducer');
jest.unmock('../sources/frontEnd/components/hierarchy/flex/actions');
import toggleReducer from '../sources/frontEnd/components/hierarchy/flex/reducers/toggleCollapse.reducer';

var defaultState = {
  items : [
    { treeCode : '0-', name : 'root', $isOpen : true, $isHidden : true },
    { treeCode : '0-0-', name : 'first child', $isOpen : true, $isHidden : true },
    { treeCode : '0-0-0-', name : 'last child', $isOpen : false, $isHidden : true },
    { treeCode : '0-1-', name : 'ok', $isOpen : true, $isHidden : true }
  ]
};

describe('toggle reducer', () => {
  it('is defined', () => {
    expect(toggleReducer).toBeDefined();
    expect(toggleReducer.reduce).toBeDefined();
    expect(toggleReducer.canHandleAction).toBeDefined();
  });

  it('toggle item', () => {
    var treeCode = '0-0-';
    var openItems = defaultState.items.filter((item) => item.treeCode === treeCode && item.$isOpen);
    expect(openItems.length).toEqual(1);
    var newState = toggleReducer.reduce(defaultState, { treeCode : '0-0-' });
    openItems = newState.items.filter((item) => item.treeCode === treeCode && item.$isOpen);
    expect(openItems.length).toEqual(0);
  });
});
