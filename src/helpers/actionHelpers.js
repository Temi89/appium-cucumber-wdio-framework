class ActionHelper {

    static async launchBrowserUrl(urlToLaunch) {
        await browser.url(urlToLaunch);  // Use await for async call
    }

    static async getTitle() {
        return await browser.getTitle();  // Await the promise from getTitle
    }

    static async launchApp() {
        await driver.launchApp();  // Await the promise for app launch
    }

    static async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP');  // Await the switch context operation
    }

    static async pause(seconds) {
        await browser.pause(seconds * 1000);  // Await pause to ensure it completes
    }

    static async isVisible(locator) {
        return await $(locator).isDisplayed();  // Await the promise for visibility check
    }

    static async click(locator) {
        await $(locator).click();  // Await the click action
    }

    static async waitForElement(locator, waitTimeInSeconds = 50) {
        await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);  // Await element display wait
    }

    static async clearText(locator) {
        await $(locator).setValue('');  // Await the clear text action
    }

    static async sendText(locator, inputText) {
        await $(locator).setValue(inputText);  // Await sending text
    }

    static async getText(locator) {
        return await $(locator).getText();  // Await the text retrieval
    }
}

module.exports = ActionHelper;
