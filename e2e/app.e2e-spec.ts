import { BeerAppPage } from './app.po';

describe('beer-app App', function() {
  let page: BeerAppPage;

  beforeEach(() => {
    page = new BeerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
