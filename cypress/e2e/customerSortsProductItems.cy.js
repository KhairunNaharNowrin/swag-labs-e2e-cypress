/// <reference types="cypress" />
import LoginPage from "../support/pageObjects/loginPage";
import ProductPage from "../support/pageObjects/productPage";
import CheckoutPage from "../support/pageObjects/checkoutPage";

describe('Test Customer sorts product items', () => {

    const loginPage = new LoginPage()
    const productPage = new ProductPage()
    const checkoutPage = new CheckoutPage()

    const username = Cypress.config('userName')
    const password = Cypress.config('password')
    const redirectUrl = '/inventory';

    //'Given standard customer is logged in'

    beforeEach(() => {
        loginPage.login(username, password);
    });

    afterEach(() => {
        // Reset state after each test case
        cy.clearCookies();
        cy.clearLocalStorage();
        loginPage.visit();
    });

    it('Given standard customer is logged in,When the customer sorts available products in product view,Then the products are ordered according to the chosen sort method', () => {

        //should sort products by name (A to Z) and verify the order
        productPage.selectSortOption('az');
        productPage.verifySortOrder('az')

        //should sort products by name (Z to A) and verify the order
        productPage.selectSortOption('za');
        productPage.verifySortOrder('za')

        //should sort products by price (low to high) and verify the order
        productPage.selectSortOption('lohi');
        productPage.verifySortOrder('lohi')


        //should sort products by price (high to low) and verify the order
        productPage.selectSortOption('hilo');
        productPage.verifySortOrder('hilo')
    });


});