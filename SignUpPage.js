class SignupPage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  openSignupModal() {
    cy.get('#signin2').click();
  }

  fillUsername(username) {
    cy.get('#sign-username').type(username);
  }

  fillPassword(password) {
    cy.get('#sign-password').type(password);
  }

  submitSignup() {
    cy.get('button[onclick="register()"]').click();
  }

  confirmAlert(text) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(text);
    });
  }

  signup(username, password, expectAlert = false) {
    this.openSignupModal();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submitSignup();
    if (expectAlert) {
      this.confirmAlert('This user already exists.');
    }
  }
}

export default SignupPage;
