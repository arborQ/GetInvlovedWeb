jest.unmock('../sources/components/search/application.search');
jest.unmock('../sources/components/routing/routes');

import searchComponent from '../sources/components/search/application.search';

describe('application.search', () => {
  it('is defined', () => {
    expect(searchComponent).toBeDefined();
  });

  it('PageCode is set', () => {
    expect(searchComponent.PageCode).toBe('/Szukaj');
  });

  describe('instance', () => {
    var instance = new searchComponent();
    it('can create instance, and has render function', () => {
      expect(instance).not.toBe(null);
      expect(instance.render).toBeDefined();
    });

    it('can render', () => {
      instance.render();
    });
  });
});
