import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.google.com/')
})

test('locators syntax rules', async ({ page }) => {
  // by tag name
  page.locator('input')

  // by ID
  page.locator('#searchform')

  // by class value (corrected)
  page.locator('.CvDJxb.YNk70c')

  // by attribute
  page.locator('[jscontroller="tIj4fb"]')

  // by class attribute
  page.locator('[class="sfbg"]')

  // by combining multiple selectors
  page.locator('input[class="sfbg"][jscontroller="tIj4fb"]')

  // by XPath (corrected)
  page.locator('//*[@id="searchform"]')
})

test('user facing locators', async ({ page }) => {
  // Add your test steps here

  // await page.getByRole("search",{name:"Search"} ).click()

  // await page.getByLabel('Gmail ').click()
  
  // await page.getByPlaceholder('placeholder aria-autocomplete="both"').click()

  await page.getByText('Store').click()

  await page.getByTitle('Search').click()

  // await page.getByTestId('')

})


test('test locating chiled element', async({page})=>{
  
  // await page.locator('div a :text-is("Privacy")').click()

  // await page.locator('div a :text-is("Gmail")').click()

  // await page.locator('div').locator('a').locator(':text-is("Gmail")').click()


})