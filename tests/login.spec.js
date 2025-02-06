// @ts-check
import { test, expect } from "@playwright/test";
import LoginPage from "../src/LoginPage";
import CatalogPage from "../src/CatalogPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("Successful login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.USERNAME, process.env.PASSWORD);
  const catalogPage = new CatalogPage(page);
  await expect(catalogPage.productTitle).toHaveText("Products");
});
