import { AstromechPage } from './app.po';

describe('astromech App', function() {
  let page: AstromechPage;

  beforeEach(() => {
    page = new AstromechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
