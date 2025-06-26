import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-object-model/navigation'
import { Screenshot } from '../page-object-model/screenshot'

test ('navigate to date input feild @smoke',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/')
    const navigatetodatepage=new NavigationPage(page)
    const screenshot=new Screenshot(page)
    await navigatetodatepage.NavigateToDatePage()
    await screenshot.ScreenShot('screenshots/navigate.png')
    //save as a binary data
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
})