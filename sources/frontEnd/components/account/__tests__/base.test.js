 jest.unmock('../index.jsx');
 import component from '../index.jsx';


describe('Component account', () => {
  it('is defined', () => {
    expect(component).toBeDefined();
  });

  it('can create instance', () => {
    expect(new component()).not.toBe(null);
  });
});
