
# Playwright Test Execution with Parallel Testing for Chromium, Firefox, and WebKit

This project uses Playwright to run tests in parallel across three major browsers: Chromium, Firefox, and WebKit. It also includes functionality to generate a combined HTML report for all test results.

## Prerequisites

Before running the tests, you'll need to install the necessary dependencies and set up the environment.

### 1. Install Packages

To install the required dependencies, run the following command:

```bash
npm install
```

This will install the necessary npm packages for Playwright and related dependencies.

### 2. Install Browsers

Playwright requires the browsers (Chromium, Firefox, and WebKit) to be installed. To install them, run:

```bash
npx playwright install
```

This will download and install the necessary browser binaries.

## Running the Tests

### 1. Run All Tests in Parallel

Once the setup is complete, you can run all tests in parallel across the three browsers (Chromium, Firefox, and WebKit) using the following command:

```bash
npm run test:all
```

This command will execute the tests in parallel for each browser and provide results for all three.

### 2. Generate Combined HTML Report

After running the tests, you can generate a combined HTML report with results from all browsers. To do so, run:

```bash
npm run generate:combined-report
```

This will generate a combined HTML report that consolidates the results from Chromium, Firefox, and WebKit into a single, easy-to-read document.

## Report Structure

- **Parallel Test Execution**: The tests are executed simultaneously in the three browsers to reduce total execution time.
- **Combined Report**: The combined HTML report includes the test results for all browsers, allowing you to compare and analyze the results in one place.

## Troubleshooting

If you encounter issues, ensure that all necessary dependencies are installed and that Playwright is able to download the required browser binaries. If you face problems with the `npx playwright install` step, check your network settings or refer to the [Playwright installation documentation](https://playwright.dev/docs/intro) for more help.
