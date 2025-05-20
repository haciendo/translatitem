import { test, expect } from "@playwright/test";

test("homepage has React text", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("Translatitem");
});
