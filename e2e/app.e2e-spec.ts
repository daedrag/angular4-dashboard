import { NgDashboardPage } from './app.po';

describe('ng-dashboard App', () => {
  let page: NgDashboardPage;

  beforeEach(() => {
    page = new NgDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
