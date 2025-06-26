import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-object-model/navigation'
import { SelectDate } from '../page-object-model/datepicker'
import { LoginWebPage } from '../page-object-model/loginpage'
import { RegisterWebPage } from '../page-object-model/registerpage'
import { FakerLibrary } from '../page-object-model/fakerlibraryrandomdatageneration'
import { faker } from '@faker-js/faker'
import { Screenshot } from '../page-object-model/screenshot'
// test.describe.configure({mode:'parallel'})


test.beforeEach('launch page',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/')
})

test ('navigate to date input feild @smoke',async ({page})=>{
    const navigatetodatepage=new NavigationPage(page)
    const screenshot=new Screenshot(page)
    await navigatetodatepage.NavigateToDatePage()
    await screenshot.ScreenShot('screenshots/navigate.png')
    //save as a binary data
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))


})

test.skip('Register the account @regression',async ({page})=>{
    const registerpage=new RegisterWebPage(page)
    await registerpage.RegisterPage('khaja','khaja','khaja')
})
test('login to webpage',async ({page})=>{
    const loginpage=new LoginWebPage(page)
    
    await loginpage.LoginPage('khaja','khaja')
})

test('date picker',async({page})=>{
    const selectdate =new SelectDate(page)
    await selectdate.DatePicker(7)
    // await expect(page.locator('#col-md-4')).toHaveScreenshot()
})

test('use faker library for test data generation faker library',async ({page})=>{
    const fullnamefakerlibrary = new FakerLibrary(page)
    const randomfullname=faker.person.fullName()
    const randomphonenumber=faker.phone.number()
    const randomeail=faker.number.int(10000)
    const email=`${randomfullname.replace(' ','')}${randomeail}@gmail.com`
    await fullnamefakerlibrary.randomdatageneration(randomfullname,randomphonenumber)
    console.log(randomfullname,randomphonenumber,email)
})



