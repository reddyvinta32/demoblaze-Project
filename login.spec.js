import LoginPage from '../pageObjects/LoginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should log in an existing user', () => {
    loginPage.login('reddy.vinta', 'reddy123');
  
  });
  
  it('should log in with invalid user details', () => {
    loginPage.login('reddy.visnta', 'reddys123');
  
  });
});
