const {Before, After, AfterStep, Status} = require('@cucumber/cucumber');
const ElsevierPage = require('../pages/elsevier.page');
const BrowserManager = require('../utils/browserManager');
const fs = require('fs');

let browser;
let page;
let elsevierPage;

Before(async function (scenario) {
    const browserType = process.env.BROWSER || 'chromium'; // Default to Chromium
    await BrowserManager.launchBrowser(browserType);       // Launch the browser
    this.page = await BrowserManager.createPage();
    elsevierPage = new ElsevierPage(this.page);
    this.elsevierPage = elsevierPage;

});


AfterStep(async function (step) {
    if (step.result.status !== Status.PASSED) {
        const browserType = process.env.BROWSER || 'unknown'; // Default to 'unknown' if BROWSER is not set
        const screenshotPath = `screenshots/${browserType}/${step.pickle.name}-step-failed-screenshot.png`

        try {
            // Ensure the page object is available
            if (page) {
                // Take a screenshot on step failure
                await page.screenshot({path: screenshotPath, fullPage: true});

                // Attach the screenshot to the report
                await this.attach(fs.readFileSync(screenshotPath), 'image/png');
            } else {
                console.error('Page object is not available to take a screenshot.');
            }
        } catch (error) {
            console.error('Failed to take screenshot:', error);
        }
    }
});
After(async function (scenario) {
    if (browser) {
        await browser.close();
    }
});
