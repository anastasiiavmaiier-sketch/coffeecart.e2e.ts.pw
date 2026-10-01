import { test, expect } from '@playwright/test';

test('Verify user can complete the checkout process successfully', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  const checkoutButton = page.locator('[data-test="checkout"]');
  await expect(checkoutButton).toBeVisible();
  await checkoutButton.click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Anastasiia');
  await page.getByRole('textbox', { name: 'Email' }).fill('anastasiia.v.maiier@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText(/Thanks for your purchase|Payment successful/i)).toBeVisible();
});