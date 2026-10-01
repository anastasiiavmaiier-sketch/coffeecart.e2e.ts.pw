import { test, expect } from '@playwright/test';

test('Verify user can add Espresso, check cart total', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  const checkoutButton = page.locator('[data-test="checkout"]');
  await expect(checkoutButton).toContainText('$10.00');
});