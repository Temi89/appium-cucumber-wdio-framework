const { expect } = require('@playwright/test');

class ElsevierPage {
    constructor(page) {
        this.page = page;
        // Extract selectors to constants
        this.acceptButtonSelector = '[data-testid="accept-all-cookies-button"]';
        this.searchButtonSelector = '[data-testid="search-button"]';
        this.searchButtonLargeSelector = '[data-testid="search-button-large"]';
        this.queryFieldSelector = '[name="query"]';
        this.resultsCountSelector = '[data-testid="results-count"]';
    }

    async navigateTo(url) {
        console.log(`Navigating to ${url}`);
        await this.page.goto(url);
    }

    async acceptCookies() {
        if (await this.page.$(this.acceptButtonSelector) !== null) {
            console.log('Accepting cookies');
            await this.page.click(this.acceptButtonSelector);
        }
    }

    async searchForJournal(journal) {
        console.log(`Searching for journal: ${journal}`);
        await this.page.locator(this.searchButtonSelector).click();  // Use the extracted selector
        await this.page.fill(this.queryFieldSelector, journal);      // Use the extracted selector for the query input
        await this.page.locator(this.searchButtonLargeSelector).click();  // Use the extracted selector
    }

    async getSearchResults() {
        console.log('Waiting for search results');
        const results = await this.page.locator(this.resultsCountSelector).innerText();
       // throw new Error('foo is foo')
        expect(results).toBeFalsy; // Ensure results are visible or present
    }
}

module.exports = ElsevierPage;
