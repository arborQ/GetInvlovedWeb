jest.unmock('../sources/components/search/fake');

describe('application.search', () => {
  it('has render function', () => {
    var searchComponent = require('../sources/components/search/fake');
    expect(searchComponent).toBeDefined();
  });
});
