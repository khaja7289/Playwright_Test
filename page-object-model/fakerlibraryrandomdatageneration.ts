import test, {Page,expect} from '@playwright/test';


export class FakerLibrary{
    readonly page: Page;
    constructor(page :Page){
        this.page=page
    }
    async randomdatageneration(name:string,phonenumber:string){
        await this.page.goto('https://practice.expandtesting.com/form-validation')
        const fullnamelocator=this.page.locator('#validationCustom01')
        await fullnamelocator.scrollIntoViewIfNeeded()
        await fullnamelocator.click()
        await fullnamelocator.fill(name)
        const phonenumberlocator=this.page.getByRole('textbox', { name: 'Contact number PickUp Date' })
        await phonenumberlocator.click()
        await phonenumberlocator.fill(phonenumber)
    }
}