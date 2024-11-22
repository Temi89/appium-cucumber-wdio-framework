// steps/search_journal.steps.js

const { Given,When, Then } = require('@cucumber/cucumber');
require('dotenv').config();

Given('I navigate to the homepage', async function () {
    await this.elsevierPage.navigateTo(process.env.HOMEPAGE_URL, {timeout: 10000});
    await this.elsevierPage.acceptCookies();

});

When('I search for {string}', async function (journal) {
    await this.elsevierPage.searchForJournal(journal); // Use the elsevierPage from the World
});

Then('I should see search results related to {string}', async function (journal) {
 await this.elsevierPage.getSearchResults(); // Use the elsevierPage from the World
});
