import { argosScreenshot } from "@argos-ci/playwright";
import {test,expect} from '@playwright/test';


test('date picker', async({page})=>{
    await page.goto('https://practice.expandtesting.com/')
    await argosScreenshot(page,'HomePage')
    await page.goto('https://practice.expandtesting.com/inputs')
    await argosScreenshot(page,'Validation Page')
    const date = new Date()
    const futureDate = new Date(date);
    futureDate.setDate(date.getDate() + 700);
    const formattedDate = futureDate.toISOString().split('T')[0];
    console.log(formattedDate)
    const datainput= page.getByRole('textbox', { name: 'Input: Date' })
    await datainput.scrollIntoViewIfNeeded()
    await datainput.fill(formattedDate);
    await page.getByRole('button', { name: 'Display Inputs' }).click();
    const datavalidation = await page.locator('#output-date').textContent()
    expect(datavalidation).toEqual(formattedDate)
    await argosScreenshot(page,'Resultpage Page')
})

    