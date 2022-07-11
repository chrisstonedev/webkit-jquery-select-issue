import {test, expect} from '@playwright/test';

test('should allow me to add todo items', async ({page}) => {
    await page.goto('http://localhost:8080');
    await page.click('#changeOption');
    await page.click('#submitForm');
    await expect(page.locator('#parameters')).toHaveText('selectDropDown=A');
});
