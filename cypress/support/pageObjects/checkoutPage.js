class checkOutInfoPage {

get firstName() {
    return cy.get('[data-test="firstName"]');
}

get secondName() {
    return cy.get('[data-test="lastName"]');
}

get zipcode() {
    return cy.get('[data-test="postalCode"]');
}

get continueButton() {
    return cy.get('[data-test="continue"]');
}

get finishButton() {
    return cy.get('[data-test="finish"]');
}

get orderSuccessMessage() {
    return cy.get('[data-test="checkout-complete-container"]');
}
enterFirstname(firstName) {
    this.firstName.type(firstName).wait(200);
  }

  enterSecondtname(secondName) {
    this.secondName.type(secondName).wait(200);
  }

  enterzipcode(zipCode) {
    this.zipcode.type(zipCode).wait(200);
  }

  setUpAddress(firstName, secondName, zipCode) {

    this.enterFirstname(firstName);
    this.enterSecondtname(secondName);
    this.enterzipcode(zipCode);
    
  }

}

export default checkOutInfoPage;