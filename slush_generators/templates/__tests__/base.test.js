 jest.unmock('../index');
 import component from '../index';


describe('Component <%= name %>', () => {
  it('is defined', () => {
    expect(component).toBeDefined();
  });

  it('can create instance', () => {
    expect(new component()).not.toBe(null);
  });
});
