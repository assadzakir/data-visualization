import { DataVisualizationPage } from './app.po';

describe('data-visualization App', () => {
  let page: DataVisualizationPage;

  beforeEach(() => {
    page = new DataVisualizationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
