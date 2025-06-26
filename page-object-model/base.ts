import {Page} from '@playwright/test';

export class HelperBase{
    readonly page:Page

    constructor(page:Page){
        this.page=page
    }
    async waitingtimeinseconds(time:number){
        await this.page.waitForTimeout(time*1000)
    }
}

