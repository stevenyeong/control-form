import { DataManipulatePage } from './app.po';

describe('data-manipulate App', () => {
  let page: DataManipulatePage;

  beforeEach(() => {
    page = new DataManipulatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
