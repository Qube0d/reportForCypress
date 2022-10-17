import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  defaultCommandTimeout: 5000,
  execTimeout: 10000,
  taskTimeout: 10000,
  pageLoadTimeout: 50000,
  requestTimeout: 10000,
  responseTimeout: 50000,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  env: {
    allureResultsPath: '../allure-results',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com/index.php',
    specPattern: 'cypress/e2e/tests/**/*.test.ts',
  },
})
