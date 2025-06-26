import {test,expect} from '@playwright/test'
import { PageManeger } from '../page-object-model/pagemaneger'

test.beforeEach(async ({page})=>{
    await page.goto('https://practice.expandtesting.com/')
})

test('navigatepage' , async({page})=>{
    const pm=new PageManeger(page)
    await pm.NavigateTo()
})
test('Register the account',async ({page})=>{
    const pm=new PageManeger(page)
    await pm.RegisterTheWebPage()
})
test('login page',async({page})=>{
    const pm=new PageManeger(page)
    await pm.LoginTheWebPage()
})