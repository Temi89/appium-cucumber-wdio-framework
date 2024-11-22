const ActionHelper = require('./../helpers/actionHelpers');
const {expect} = require('chai')

class CreateAccountPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/createAccount.screen.js`);
    }

    async isVisible() {
        expect(await ActionHelper
            .isVisible('//android.widget.TextView[@text="Create an account"]'))
            .to.equal(true)
    }

    async populateField(fieldLocator, text) {
        await ActionHelper.clearText(fieldLocator)
        await ActionHelper.sendText(fieldLocator, text);
    }

    async populateUsername(txt) {
        const userName = this.getObjectLocator().userName;
        await this.populateField(userName, txt);
    }

    async populatePassword(txt) {
        const password = this.getObjectLocator().password;
        await this.populateField(password, txt);
    }

    async populateRepeatPassword(txt) {
        const repeatPassword = this.getObjectLocator().repeatPassword;
        await this.populateField(repeatPassword, txt);
    }

    async getFieldError() {
        const error = this.getObjectLocator().error
        await ActionHelper.waitForElement(error)
        return await ActionHelper.getText(error)
    }

    async submitForm() {
        const submit = this.getObjectLocator().submitButton
        await ActionHelper.click(submit)
    }
}

module.exports = CreateAccountPage;
