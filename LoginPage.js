class LoginPage {
  visit() {
    cy.visit('/');
  }

  openLoginModal() {
    cy.get('#login2').click();
  }

  fillUsername(username) {
    cy.get('#loginusername').type(username);
  }

  fillPassword(password) {
    cy.get('#loginpassword').type(password);
  }

  submitLogin() {
    cy.get('button[onclick="logIn()"]').click();
  }

  login(username, password) {
    this.openLoginModal();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submitLogin();
  }
}

export default LoginPage;
