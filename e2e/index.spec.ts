import { test, expect } from '@playwright/test'

let urlindex = "http://localhost:3000";

test.describe('Main area', () => {
    test('Header Tags', async({ page }) => {
        await page.goto(urlindex)

        await expect(page.locator('div > h1')).toHaveCount(1);
    })

    test('Count number of button', async({ page }) => {
        await page.goto(urlindex)

        await expect(page.locator('div > button')).toHaveCount(1);
    })
})