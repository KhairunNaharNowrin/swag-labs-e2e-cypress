/// <reference types="cypress" />
import LoginPage from "../support/pageObjects/loginPage";
import ProductPage from "../support/pageObjects/productPage";
import CheckoutPage from "../support/pageObjects/checkoutPage";

describe('Test Customer purchases products', () => {

  const loginPage = new LoginPage()
  const productPage = new ProductPage()
  const checkoutPage = new CheckoutPage()

  const username = Cypress.config('userName')
  const password = Cypress.config('password')
  const redirectUrl = '/inventory';

  //'Given standard customer is logged in'

  beforeEach(() => {
    loginPage.login(username, password);
      loginPage.verifyLoginSuccess(redirectUrl);
  });

   it('When the customer adds multiple products to the shopping cart , And proceeds to checkout the purchase, Then purchase is successful', () => {
    productPage.addProductSauceLabsBackpack.click();
    productPage.verifyCartCount('1');
    productPage.addProductSauceLabsBikeLight.click();
    productPage.addBikeLightToCart;
    productPage.verifyCartCount('2');

    // And proceeds to checkout the purchase
    productPage.cartBadge.scrollIntoView().click();
    productPage.checkOutButton.click();

    //Then purchase is successful
    checkoutPage.setUpAddress('James', 'Dong', '2345');
    checkoutPage.continueButton.click();
    checkoutPage.finishButton.scrollIntoView().click();
    checkoutPage.orderSuccessMessage.should('be.visible');
 });



});