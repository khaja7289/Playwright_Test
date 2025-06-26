import {expect, test} from '@playwright/test'
import { fileURLToPath } from 'url'

test.beforeEach(async ({page})=>{
    await page.goto('https://practice.expandtesting.com/')
})

test('text fill feild', async ({page})=>{
    const FillLocator = page.locator('#search-input')
    await FillLocator.fill('khaja')
    await FillLocator.clear()
    await FillLocator.pressSequentially('khaja im back to form ',{delay:500})

    //generic assertions
    const InputValue=await FillLocator.inputValue()
    expect(InputValue).toEqual('khaja im back to form ')

    //locator assertion
    await expect(FillLocator).toHaveValue('khaja im back to form ')

})

test('Radio button validation', async ({page})=>{
    await page.goto('https://practice.expandtesting.com/radio-buttons')
    await page.locator('#yellow').check()
    const RadioButton= await page.locator('#yellow').isChecked()
    //assertions
    expect(RadioButton).toBeTruthy()

    await page.locator('#football').check()
    //posstive assertion
    expect(await page.locator('#football').isChecked()).toBeTruthy()
    //negative assertion
    expect(await page.locator('#tennis').isChecked()).toBeFalsy()

})

test('Check Boxes', async ({page})=>{
    await page.goto('https://practice.expandtesting.com/checkboxes')

    await page.getByRole('checkbox', {name : 'Checkbox 1'}).check({force:true}) //check forcefully if hidden
    await page.getByRole('checkbox', {name : 'Checkbox 2'}).uncheck({force:true})
    //assertion
    expect(await page.getByRole('checkbox', {name : 'Checkbox 1'}).isChecked()).toBeTruthy()
    expect(await page.getByRole('checkbox', {name : 'Checkbox 2'}).isChecked()).toBeFalsy()

    //check all check boxes
    const allboxes=page.getByRole('checkbox')

    // for(const box of await allboxes.all()){
    //     await box.check()
    //     expect(box.isChecked()).toBeTruthy()
    // }

    //uncheck all check boxes
    // for(const box of await allboxes.all()){
    //     await box.uncheck({force:true})
    //     expect(box.isChecked()).toBeFalsy()
    // }

})



// test('Dropdown Selection and Validation', async ({ page }) => {
//     await page.goto('https://practice.expandtesting.com/dropdown');
//     // await page.locator('#dropdown').click();
//     // await page.selectOption('#dropdown', '1');
    
//     const optionValues = await page.$$eval('#country', options =>
//     options
//      .map(option => (option as HTMLOptionElement).value)
//      .filter(value => value !== '')
//     );
    
//     // Loop through all options
//     for (const value of optionValues) {
//     await page.selectOption('#dropdown', value);
    
//     const selectedValue = await page.$eval(
//     '#dropdown',
//     el => (el as HTMLSelectElement).value
//     );
    
//     expect(selectedValue).toBe(value);
//     console.log(`Selected and validated: ${value}`);
//     }
//     });
    
test('hover and tooltips', async ({page})=>{
    // await page.goto('https://practice.expandtesting.com/hovers')
    // const hoverlocator =page.getByRole('img', { name: 'User Avatar' });
    // await hoverlocator.nth(0).hover()
    // const figcaptionText = await page.locator('.figcaption h5').nth(0).textContent();
    // expect(figcaptionText?.trim()).toBe('name: user1'); 

    await page.goto('https://practice.expandtesting.com/tooltips')
    await page.locator('#btn1').hover()
    const tooltips=await page.getByRole('button',{name:"Tooltip on top"}).textContent()
    expect(tooltips).toBe('Tooltip on top')

})

test('dialog box',async({page})=>{
    await page.goto('https://practice.expandtesting.com/js-dialogs')
    await page.locator('#js-alert').click()

    page.on('dialog',dialog=>{
        expect(dialog.message()).toEqual('I am a Js Alert')
        dialog.accept()
    })
    
})

test('date picker', async({page})=>{
    await page.goto('https://practice.expandtesting.com/inputs')

    const date = new Date()
    const futureDate = new Date(date);
    futureDate.setDate(date.getDate() + 700);
    const formattedDate = futureDate.toISOString().split('T')[0];
    console.log(formattedDate)
    const datainput= page.getByRole('textbox', { name: 'Input: Date' })
    await datainput.scrollIntoViewIfNeeded()
    await datainput.fill(formattedDate);
    await page.getByRole('button', { name: 'Display Inputs' }).click();
    const datavalidation = await page.locator('#output-date').textContent()
    expect(datavalidation).toEqual(formattedDate)
})

test('sliders',async({page})=>{

    await page.goto('https://practice.expandtesting.com/horizontal-slider')
    for (let range = 0; range <= 5; range += 0.5) {
        console.log(range);
        const rangestring=range.toString()
        await page.getByRole('slider').fill(rangestring);
        const expextedrange=await page.locator('#range').textContent()
        expect(expextedrange).toEqual(rangestring)
    }

})

test('Drag and Drop ,Ifram',async({page})=>{
    await page.goto('https://practice.expandtesting.com/drag-and-drop-circles')
    const source = page.locator('#source');
    const target = page.locator('#target');
    const colors = ['red', 'green', 'blue']

    for (const className of colors) {
        const item = source.locator(`.${className}`);
        await item.dragTo(target);
    }

    for (const className of colors) {
        const droppedItem = target.locator(`.${className}`);
        const actualClass = await droppedItem.getAttribute('class');
        expect(actualClass).toContain(className);
        console.log(`✅ Dropped item has class: ${actualClass}`);
    }
       
})

