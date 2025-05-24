<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project contains a Python FastAPI backend (in /backend) and a React frontend (in /frontend).

## Project Structure and Testing

- The frontend uses React and is tested with Playwright
- Playwright tests are located in `/frontend/tests/`
- Use Model Context Protocol (MCP) for automated testing and web interaction

## MCP and Playwright Integration

When interacting with the web application:

1. Use Playwright's API for web automation and testing
2. Leverage MCP capabilities to:
   - Verify generated code changes
   - Interact with UI elements
   - Perform assertions on page content
   - Monitor state changes

## Test Examples

Example of a Playwright test that Copilot can understand and modify:

```javascript
// Example structure in /frontend/tests/
test("example test", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button").click();
  await expect(page.getByText("Success")).toBeVisible();
});
```

## Automated Testing Instructions

For verifying changes:

1. Run Playwright tests with `npx playwright test`
2. Use visual assertions when appropriate
3. Implement proper wait and retry strategies
4. Add detailed test descriptions for better understanding

Remember to validate UI changes by running tests and checking visual output.
