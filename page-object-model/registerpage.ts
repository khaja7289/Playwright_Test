import {Page,expect} from '@playwright/test';
import { HelperBase } from './base';

export class RegisterWebPage extends HelperBase{
    readonly page: Page;
    constructor(page :Page){
        super(page)
    }

    /**
     * this methid will related to Register a webpage
     * @param email this refer to valid email need to enter in input feild 3 to 39 digits
     * @param password this refers to password alleast 5 char to 30 char
     * @param conformpassword thos refers to enter same password form above feild 
     * 
     */

    async RegisterPage(email: string,password: string,conformpassword: string){
        await this.waitingtimeinseconds(10)
        await this.page.goto('https://practice.expandtesting.com/register')
        await this.page.locator('#username').fill(email)
        await this.page.locator('#password').fill(password)
        await this.page.locator('#confirmPassword').fill(conformpassword)
        await this.page.getByRole('button', { name: 'Register' }).click()
    }
}