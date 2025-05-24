import { test, expect, request } from "@playwright/test";

test("homepage is loaded as expected", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h2")).toContainText("Translatitem");
  await expect(page.locator("p")).toContainText(
    "An application to translate your business"
  );
});
