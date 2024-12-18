const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //watchForFileChanges:false,
  watchForFileChanges:false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    experimentalStudio: true,
    
    defaultCommandTimeout: 10000, // Timeout for commands like cy.get(), cy.click() (10 seconds)
    pageLoadTimeout: 60000, // Timeout for page load (60 seconds)
    requestTimeout: 15000, // Timeout for network requests (15 seconds)
    responseTimeout: 15000
  },
});
