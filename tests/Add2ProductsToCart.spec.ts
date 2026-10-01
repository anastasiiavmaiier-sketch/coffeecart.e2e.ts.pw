import { test, expect } from '@playwright/test';

test('Verify total price calculation for multiple different items', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  const checkoutButton = page.locator('[data-test="checkout"]');
  await expect(checkoutButton).toContainText('Total: $29.00');
});
