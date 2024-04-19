import SignupPage from '../pageObjects/SignupPage';

describe('Signup Tests', () => {
  const signupPage = new SignupPage();

  beforeEach(() => {
    signupPage.visit();
  });

  it('should sign up a new user', () => {
    signupPage.signup('newuser', 'newpass');
  });

  it('should not allow a user to sign up with an existing username', () => {
    signupPage.signup('reddy.vinta', 'reddy123', true);
  });
});
