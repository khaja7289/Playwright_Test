import test, {Page,expect} from '@playwright/test';

test('date picker', async({page})=>{
    await page.goto('https://practice.expandtesting.com/')
    await page.goto('https://practice.expandtesting.com/inputs')
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
})