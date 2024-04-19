const { defineConfig } = require("cypress");

module.exports = defineConfig({
   
  e2e: {
    modifyObstructiveCode: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
    
    },
  }
});
