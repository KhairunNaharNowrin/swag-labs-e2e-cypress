# swag-labs-e2e-cypress
This repository contains end-to-end (E2E) test automation scripts using Cypress for the Swag Labs application. The test suite covers key user interactions and scenarios to ensure the reliability and functionality of the platform.

## Test Scenarios Covered

1. **Customer Purchases Products:**
    - **Given** a standard customer is logged in,
    - **When** the customer adds multiple products to the shopping cart,
    - **And** proceeds to checkout the purchase,
    - **Then** the purchase is successful.

2. **Customer Sorts Product Items:**
    - **Given** a standard customer is logged in,
    - **When** the customer sorts available products in the product view,
    - **Then** the products are ordered according to the chosen sort method.

3. **User is Locked Out from the Platform:**
    - **Given** the customer is a locked-out customer,
    - **When** the customer attempts to log in using proper credentials,
    - **Then** the login fails,
    - **And** the customer is presented with an error state.
  
## Getting Started

To get started with the Cypress tests, follow these steps:

1. Clone the repository:
    ```bash
    cd swag-labs-e2e-cypress
    git clone git@github.com:KhairunNaharNowrin/swag-labs-e2e-cypress.git
    ```
2. Install the dependencies:
    ```bash
    npm init -y   
    ```
3. Install the Cypress:
    ```bash
    npm install cypress --save-dev
    ```
4. Run the Cypress tests:
    ```bash
    npx cypress open
    ```
5. Project Setup: Disabling watchForFileChanges: false , in cypress.confiq.js improves performance and control by preventing automatic reloading of application files during test runs.

 ```bash  
module.exports = {
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
};
```

##Project Page Object Model (POM) pattern:

```bash  
/cypress
  /integration
    /e2e
      - customerPurchasesProducts.spec.js
      - customerSortsProductItems.spec.js
      - userLockedOut.spec.js
  /support
    /pageObjects
      - loginPage.js
      - productPage.js
      - checkoutPage.js

```
## Generating Detailed Reports with Plugins

**Install the Plugin::**

```bash  
npm install --save-dev cypress-mochawesome-reporter
```
**Update Cypress Configuration:**
Update cypress.config.js to include the reporter configuration.

```bash 
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
```
**Create a Report After Running Tests:**

```bash 
npx cypress run
```
**View the Report:**

1. The report will be saved in the cypress/reports directory.
2. Open the generated HTML file in a browser to view the detailed report.


