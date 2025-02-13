import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: './src/**/*.spec.ts',
    supportFile: false,
    baseUrl: 'http://localhost:3000',
  },
})
