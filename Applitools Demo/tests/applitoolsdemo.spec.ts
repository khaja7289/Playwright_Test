import { test ,expect} from '@applitools/eyes-playwright/fixture';

test('date picker', async({page,eyes})=>{
    await page.goto('https://practice.expandtesting.com/')
    await eyes.check('HomePage')
    await page.goto('https://practice.expandtesting.com/inputs')
    await eyes.check('InputPage')
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
    await eyes.check('ResultPage')
})