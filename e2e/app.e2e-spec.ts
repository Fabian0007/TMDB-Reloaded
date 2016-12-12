import { TmdbproyectPage } from './app.po';

describe('tmdbproyect App', function() {
  let page: TmdbproyectPage;

  beforeEach(() => {
    page = new TmdbproyectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
