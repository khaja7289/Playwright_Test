import {Page,expect} from '@playwright/test';
    
export class SelectDate{
    readonly page: Page;
    constructor(page :Page){
        this.page=page
    }

    /**
     * @param inputdate refers currentdate+inputdate=callender pick
     */
    async DatePicker(inputdate: number){
        await this.page.goto('https://practice.expandtesting.com/inputs')
        const date = new Date()
        const futureDate = new Date(date);
        futureDate.setDate(date.getDate() + inputdate);
        const formattedDate = futureDate.toISOString().split('T')[0];
        console.log('selected Date: '+formattedDate,'Todays date: '+date.toISOString().split('T')[0])
        const datainput= this.page.getByRole('textbox', { name: 'Input: Date' })
        await datainput.scrollIntoViewIfNeeded()
        await datainput.fill(formattedDate);
        await this.page.getByRole('button', { name: 'Display Inputs' }).click();
        const datavalidation = await this.page.locator('#output-date').textContent()
        expect(datavalidation).toEqual(formattedDate)
    }

}