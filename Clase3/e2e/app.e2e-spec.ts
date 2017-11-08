import { Clase3Page } from './app.po';

describe('clase3 App', () => {
  let page: Clase3Page;

  beforeEach(() => {
    page = new Clase3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
