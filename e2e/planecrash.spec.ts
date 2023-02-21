import { test, expect } from '@playwright/test'

let urlplanecrash = "http://localhost:3000/planecrash";

test.describe('Main area', () => {
    test('Header Tags', async({ page }) => {
        await page.goto(urlplanecrash)

        await expect(page.locator('div > h1')).toHaveCount(1);
    })

    test('Count number of button', async({ page }) => {
        await page.goto(urlplanecrash)

        await expect(page.locator('div > p')).toHaveCount(6);
    })
})