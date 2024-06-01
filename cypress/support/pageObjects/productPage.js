class productPage {

    get addProductSauceLabsBackpack() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }


    get addProductSauceLabsBikeLight() {
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }
    

    get cartBadge() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get checkOutButton() {
        return cy.get('[data-test="checkout"]');
    }

    

    verifyCartCount(expectedCount) {
        this.cartBadge.should('have.text', expectedCount);
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



}

export default productPage;
