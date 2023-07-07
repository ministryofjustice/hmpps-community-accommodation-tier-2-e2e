import { test, expect } from '@playwright/test';

test('has a title', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1')).toHaveText("Apply for a CAS-2 placement");
});
