import { test, expect } from '@playwright/test';

test('Verify promo offer appears and discount applies when adding multiple items', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');

  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Mocha"]').click();
  const promoButton = page.getByRole('button', { name: 'Yes, of course!' });
   if (await promoButton.isVisible()) {
     await promoButton.click();
  }  else {

    await page.locator('[data-test="Espresso"]').click();
    if (await promoButton.isVisible()) {
      await promoButton.click();
    }
  }

  await page.locator('[data-test="checkout"]').click();

  await expect(page.getByText(/Discounted/i)).toBeVisible();
});