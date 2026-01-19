import { expect, test } from '@playwright/test';

test('Has header', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('header')).toBeVisible();
});

test('Has footer', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('footer')).toBeVisible();
});