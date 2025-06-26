import {Page,expect} from '@playwright/test';
import { HelperBase } from './base';
import path from 'path';

export class Screenshot{
    readonly page: Page;
    constructor(page :Page){
        this.page=page
    }

    async ScreenShot(path:string){
        await this.page.screenshot({path})
    }
}