import {Page,expect} from '@playwright/test';
import { NavigationPage } from './navigation'
import { SelectDate } from './datepicker'
import { LoginWebPage } from './loginpage'
import { RegisterWebPage } from './registerpage'


export class PageManeger{
    private readonly page:Page
    private readonly navigatepage:NavigationPage
    private readonly selectdate:SelectDate
    private readonly loginpage:LoginWebPage
    private readonly registerpage:RegisterWebPage

    constructor(page:Page){
        this.page
        this.navigatepage=new NavigationPage(this.page)
        this.selectdate=new SelectDate(this.page)
        this.loginpage=new LoginWebPage(this.page)
        this.registerpage=new RegisterWebPage(this.page)
    }

    NavigateTo(){
        return this.navigatepage
    }
    SelectDatevalue(){
        return this.selectdate
    }
    LoginTheWebPage(){
        return this.loginpage
    }
    RegisterTheWebPage(){
        return this.registerpage
    }
}