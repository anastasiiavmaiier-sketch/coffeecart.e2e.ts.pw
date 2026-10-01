import { test, expect } from '@playwright/test';

test('Verify user can add multiple units of the same item and price updates correctly', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  const espresso = page.locator('[data-test="Espresso"]');
  await espresso.click();
  await espresso.click();
  await espresso.click();
  const checkoutButton = page.locator('[data-test="checkout"]');
  await expect(checkoutButton).toContainText('Total: $30.00');
});