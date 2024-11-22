const { chromium, firefox, webkit } = require('playwright');

class BrowserManager {
    constructor() {
        this.browser = null;
        this.page = null;
    }

    async launchBrowser(browserType = 'chromium') {
        switch (browserType) {
            case 'chromium':
                this.browser = await chromium.launch({ headless: true });
                break;
            case 'firefox':
                this.browser = await firefox.launch({ headless: true });
                break;
            case 'webkit':
                this.browser = await webkit.launch({ headless: true });
                break;
            default:
                throw new Error(`Unsupported browser: ${browserType}`);
        }
    }

    async createPage() {
        if (!this.browser) {
            throw new Error('Browser is not initialized. Call launchBrowser() first.');
        }
        this.page = await this.browser.newPage();
        return this.page;
    }

    async closeBrowser() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
            this.page = null;
        }
    }
}

module.exports = new BrowserManager();
