class loginPage {

  get userNameField() {
    return cy.get('[data-test="username"]')
  }

  get passwordFiled() {
    return cy.get('[data-test="password"]')
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]')
  }

  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    this.userNameField.type(username).wait(200);
  }

  enterPassword(password) {
    this.passwordFiled.type(password).wait(200);
  }

  clickLogin() {
    this.loginButton.click();
  }

  login(username, password) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyLoginSuccess(redirectUrl) {
    cy.url().should('include', redirectUrl);
  }

  verifyLoginFailed() {
    this.errorMessage.should('be.visible');
  }

}

export default loginPage;
