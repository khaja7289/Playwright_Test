# Test info

- Name: navigate to date input feild @smoke
- Location: C:\Users\10738962\Desktop\Git_Repo\PlayWright\tests\mobiletest.spec.ts:5:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/inputs", waiting until "load"

    at NavigationPage.NavigateToDatePage (C:\Users\10738962\Desktop\Git_Repo\PlayWright\page-object-model\navigation.ts:14:25)
    at C:\Users\10738962\Desktop\Git_Repo\PlayWright\tests\mobiletest.spec.ts:9:30
```

# Page snapshot

```yaml
- paragraph:
  - link "TestifyStack":
    - /url: https://testifystack.com/
  - text: "| Email, SMS, OTP and Webhooks Testing Stack for QA & Dev"
  - link "Quality assurance tools":
    - img
    - text: Quality assurance tools
  - link "Software testing tools":
    - img
    - text: Software testing tools
- banner:
  - navigation "Main navigation":
    - link "SUT":
      - /url: /
      - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman."'
      - text: Practice
    - list:
      - listitem:
        - button "Demos"
      - listitem:
        - link "Tools":
          - /url: /#tools
      - listitem:
        - link "Tips":
          - /url: /tips
      - listitem:
        - link "Test Cases":
          - /url: /test-cases
      - listitem:
        - link "API Testing":
          - /url: /notes/api/api-docs/
      - listitem:
        - link "About":
          - /url: /about
    - list
    - link "Free ISTQB Mock Exams":
      - /url: https://istqb.expandtesting.com/
- main:
  - insertion:
    - iframe
  - paragraph:
    - text: Do you enjoy this platform? ❤️
    - link "Buy us a coffee":
      - /url: https://www.buymeacoffee.com/expandtesting
  - navigation "breadcrumb mb-2":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem: / Inputs
  - heading "Web inputs page for Automation Testing Practice" [level=1]
  - link "Software testing tools":
    - img
    - text: Software testing tools
  - link "Test automation products":
    - img
    - text: Test automation products
  - paragraph: Web inputs refer to the data or information provided by users through various input mechanisms on a website. Web inputs allow users to interact with web pages, submit forms, and provide data for processing.
  - button "Display Inputs"
  - button "Clear Inputs"
  - text: "Input: Number"
  - 'spinbutton "Input: Number"'
  - text: "Input: Text"
  - 'textbox "Input: Text"'
  - text: "Input: Password"
  - 'textbox "Input: Password"'
  - text: "Input: Date"
  - 'textbox "Input: Date"'
- contentinfo:
  - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4]
  - paragraph:
    - text: "Version: bbea1eef | Copyright"
    - link "Expand Testing":
      - /url: https://expandtesting.com/
    - text: "2025"
- img
- insertion:
  - iframe
```

# Test source

```ts
   1 | import {Page,expect} from '@playwright/test';
   2 |
   3 | import dotenv from 'dotenv';
   4 | dotenv.config();
   5 |
   6 |
   7 | export class NavigationPage{
   8 |     readonly page: Page;
   9 |     constructor(page :Page){
  10 |         this.page=page
  11 |     }
  12 |
  13 |     async NavigateToDatePage(){
> 14 |         await this.page.goto('https://practice.expandtesting.com/inputs')
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 |         const datainput= this.page.getByRole('textbox', { name: 'Input: Date' })
  16 |         await datainput.scrollIntoViewIfNeeded()
  17 |     }
  18 |        
  19 | }
  20 |
  21 |
  22 |
```