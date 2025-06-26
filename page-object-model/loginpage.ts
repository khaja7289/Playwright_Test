import {Page,expect} from '@playwright/test';

export class LoginWebPage{
    readonly page: Page;
    constructor(page :Page){
        this.page=page
    }
    /**
    * this methid will related to Register a webpage
    * @param email this refer to valid email need to enter in input feild 3 to 39 digits
    * @param password this refers to password alleast 5 char to 30 char 
    * 
    */
    async LoginPage(email: string,password: string){
        await this.page.goto('https://practice.expandtesting.com/login')
        await this.page.locator('#username').fill(email)
        await this.page.locator('#password').fill(password)
        await this.page.getByRole('button',{name:'Login'}).click()
    }
}