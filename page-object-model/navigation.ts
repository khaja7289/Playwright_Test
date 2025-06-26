import {Page,expect} from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();


export class NavigationPage{
    readonly page: Page;
    constructor(page :Page){
        this.page=page
    }

    async NavigateToDatePage(){
        await this.page.goto('https://practice.expandtesting.com/inputs')
        const datainput= this.page.getByRole('textbox', { name: 'Input: Date' })
        await datainput.scrollIntoViewIfNeeded()
    }
       
}


