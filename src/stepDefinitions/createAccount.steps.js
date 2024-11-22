const {Given, When, Then, Before} = require('@wdio/cucumber-framework');
const {expect} = require('chai')
const ActionHelper = require("../helpers/actionHelpers");
const CreateAccountPage = require('./../pages/createAccount.page');
const Menu = require("../helpers/globalMenu");
const createAccountPage = new CreateAccountPage();


Before({tags: '@directToCreateAccount'}, async () => {
    const menu = new Menu()
    await ActionHelper.launchApp()
    await ActionHelper.switchToNativeContext();
    await ActionHelper.click(menu.allowButton)
    await ActionHelper.click(menu.skipButton)
    await ActionHelper.click(menu.moreButton)
    await ActionHelper.click(menu.loginButton)
});

Given(/^I am on the create account page$/, async () => {
    await createAccountPage.isVisible()
});


When('I {string} field with the following', async (field, dataTable) => {
    const table = dataTable.rowsHash()
    await createAccountPage[field](table.value);
})

When('I submit the form', async () => {
    await createAccountPage.submitForm()
})

When('I clear {string}', async (txt) => {
    await ActionHelper.clearSpecificText(txt)
})
Then('the following error should be displayed', async (dataTable) => {
    const table = dataTable.rowsHash()
    const er = await createAccountPage.getFieldError()
    expect(er).to.equal(table.error)
})