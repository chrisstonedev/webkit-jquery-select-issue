import {test, expect} from '@playwright/test';

test.describe('Select element should always only return one value', () => {
    test('when using the .attr() method', async ({page}) => {
        await page.goto('http://localhost:8080');
        await page.click('#changeOptionAttr');
        await page.click('#submitForm');
        await expect(page.locator('#parameters')).toHaveText('selectDropDown=A');
    });

    test('when using the .prop() method', async ({page}) => {
        await page.goto('http://localhost:8080');
        await page.click('#changeOptionProp');
        await page.click('#submitForm');
        await expect(page.locator('#parameters')).toHaveText('selectDropDown=A');
    });
});