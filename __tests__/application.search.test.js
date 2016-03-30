jest.unmock('../sources/components/search/application.search');
jest.unmock('../sources/components/routing/routes');

import searchComponent from '../sources/components/search/application.search';

describe('application.search', () => {
  it('is defined', () => {
    expect(searchComponent).toBeDefined();
  });

  it('can create instance, and has render function', () => {
    var instance = new searchComponent();
    expect(instance).not.toBe(null);
    expect(instance.render).toBeDefined();
  });

  it('can render', () => {
    var instance = new searchComponent();
    instance.render();
  });
});
