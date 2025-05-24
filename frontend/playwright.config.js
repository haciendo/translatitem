// @ts-check
/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  testIgnore: ["**/*.test.js"],
};

module.exports = config;
