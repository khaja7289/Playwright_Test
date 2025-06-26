project intilization:
npm init playwright@latest
Test run headless browser:
npx playwright test
Report Show in UI:
npx playwright show-report
Run Test in puricular browser ex chrom
npx playwright test --project=chromium
Run test with head browser
npx playwright test --project=chromium --headed
Execute spesific testfile
with head : npx playwright test example.spec.ts --project=chromium --headed
without head : npx playwright test example.spec.ts --project=chromium
Run pericular test:
npx playwright test -g "has title" --project=chromium
Skip from execution :
test.skip('has title', async ({ page }) => {
await page.goto('https://playwright.dev/');

Run only one test :
test.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

run test using UI click on test icon you'll find options (playwrite extension):

Command for open UI:
npx playwright test --ui

Trace sript for debug:
npx playwright test --project=chromium --trace on

//by tage name
    page.locator('input').first().click()

    //by Id
    page.locator('#searchform')

    //by class value
    page.locator('.CvDJxb YNk70c')

    //by atribute
    page.locator('[jscontroller="tIj4fb"]')

    //by class atribute
    page.locator('[class="sfbg"]')

    //by combine multiple selectors
    page.locator('input[class="sfbg"][jscontroller="tIj4fb"]')

    //by xpath (not recommended in playwright)
    page.locator('//*@id="searchform"')

    For autogenerate code :- npx playwright codegen https://applicationURL


    Parellel execution change the configuration in .config.ts 
    or
    add this spesific file which you wanna run parellely: test.describe.configure({mode:'parallel'})
    if you have multile test files give name as squentioal number format like 001test,002test,003test etc..


    Run test with help of tags like @smoke,@regression:

    npx playwright test --project=chromium --grep "@smoke" --headed

    for running multiple tags:
    npx playwright test --project=chromium --grep --% "@smoke|@regression" --headed

    install allure Report for HTML report generation:
    npm install --save-dev @playwright/test allure-playwright
    npm install -D allure-commandline

    for generate HTML Report:
    npx allure generate ./allure-results --clean
    npx allure open

    Valiadet Throght screenshot:
    await expect(page.locator('#col-md-4')).toHaveScreenshot()
