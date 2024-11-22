const cucumberHtmlReporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');
const open = require('open'); // To open the report automatically

// Configuration for the Firefox report only
const optionsFirefox = {
    theme: 'bootstrap',
    jsonFile: 'reports/firefox-cucumber.json',
    output: 'reports/firefox-cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,  // Set to false to prevent opening individual reports
};

// Generate the Firefox report
cucumberHtmlReporter.generate(optionsFirefox);
