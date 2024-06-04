const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    pdpBaseUrl: 'https://intellipaat.com/blog/tutorial/selenium-tutorial/selenium-cheat-sheet/',
    userName: 'standard_user',
    lockedOutUserName: 'locked_out_user',
    password: 'secret_sauce',
    watchForFileChanges: false,
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
