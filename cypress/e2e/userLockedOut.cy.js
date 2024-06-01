/// <reference types="cypress" />
import LoginPage from "../support/pageObjects/loginPage";

describe('Test User is locked out from the platform', () => {

  const loginPage = new LoginPage()

  const username = Cypress.config('lockedOutUserName')
  const password = Cypress.config('password')

    it('Given customer is a locked out customer When the customer attempts to login using proper credentials Then login fails And the customer is presented with error state', () => {
      loginPage.login(username, password);
      loginPage.verifyLoginFailed;

   });
  });