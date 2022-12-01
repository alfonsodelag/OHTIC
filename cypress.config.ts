import { defineConfig } from "cypress";

export default defineConfig({
    chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: 'alfonsodelag1@gmail.com  ',
    password: 'Alcazar1!'
  }
});
