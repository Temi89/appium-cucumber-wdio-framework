const cucumberHtmlReporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');
const open = require('open'); // To open the report automatically

// Configuration for each browser report
const optionsChromium = {
    theme: 'bootstrap',
    jsonFile: 'reports/chromium-cucumber.json',
    output: 'reports/chromium-cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,  // Set to false to prevent opening individual reports
};

const optionsFirefox = {
    theme: 'bootstrap',
    jsonFile: 'reports/firefox-cucumber.json',
    output: 'reports/firefox-cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,  // Set to false to prevent opening individual reports
};

const optionsWebkit = {
    theme: 'bootstrap',
    jsonFile: 'reports/webkit-cucumber.json',
    output: 'reports/webkit-cucumber-report.html',
    reportSuiteAsScenarios: true,
    launchReport: false,  // Set to false to prevent opening individual reports
};

// Generate the individual reports
cucumberHtmlReporter.generate(optionsChromium);
cucumberHtmlReporter.generate(optionsFirefox);
cucumberHtmlReporter.generate(optionsWebkit);

// Function to create the combined report with buttons, banner, and hidden iframes
function createCombinedReport() {
    const combinedReportContent = `
    <html>
    <head>
        <title>Combined Cross-Browser Test Report</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 0;
                color: #333;
            }
            h1 {
                text-align: center;
                color: #4CAF50;
                margin-top: 30px;
            }
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                background-color: white;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
            }
            .banner {
                background-color: #4285F4;
                color: white;
                text-align: center;
                padding: 15px;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
                display: none; /* Initially hidden */
            }
            button {
                margin: 10px;
                padding: 15px 30px;
                font-size: 16px;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.3s ease, box-shadow 0.3s ease;
            }
            button i {
                margin-right: 8px;
            }
            button:hover {
                opacity: 0.8;
            }
            /* Color coordination for each browser */
            .chromium-btn {
                background-color: #4285F4; /* Chromium (Chrome) */
            }
            .firefox-btn {
                background-color: #FF7139; /* Firefox */
            }
            .webkit-btn {
                background-color: #5AC8FA; /* WebKit (Safari) */
            }
            .active {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Highlight active button */
                border: 2px solid #333; /* Highlight border */
            }
            iframe {
                display: none;
                width: 100%;
                height: 800px;
                border: none;
                margin-top: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .buttons-container {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
            }
            .buttons-container button {
                margin: 0 10px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                font-size: 14px;
                color: #777;
            }
        </style>
    </head>
    <body>

        <div class="container">
            <h1>Cross-Browser Test Results</h1>

            <!-- Banner to display the active report name -->
            <div class="banner" id="reportBanner">Showing results for Chromium</div>

            <!-- Buttons to show the reports with icons and color coordination -->
            <div class="buttons-container">
                <button class="chromium-btn" onclick="showReport('chromium', this)"><i class="fab fa-chrome"></i> Chromium Results</button>
                <button class="firefox-btn" onclick="showReport('firefox', this)"><i class="fab fa-firefox"></i> Firefox Results</button>
                <button class="webkit-btn" onclick="showReport('webkit', this)"><i class="fab fa-safari"></i> WebKit Results</button>
            </div>

            <!-- Hidden iframes for each report -->
            <iframe id="chromium" src="chromium-cucumber-report.html"></iframe>
            <iframe id="firefox" src="firefox-cucumber-report.html"></iframe>
            <iframe id="webkit" src="webkit-cucumber-report.html"></iframe>

        </div>

        <div class="footer">
            <p>Generated with ❤️ by <a href="https://github.com/Temi89" target="_blank" style="color: #4CAF50; text-decoration: none;">Temilayo Kufeji</a></p>
        </div>

        <script>
            function showReport(reportName, button) {
                // Hide all iframes
                const iframes = document.querySelectorAll('iframe');
                iframes.forEach(iframe => iframe.style.display = 'none');

                // Show the clicked report's iframe
                const selectedIframe = document.getElementById(reportName);
                selectedIframe.style.display = 'block';

                // Reset and reload the iframe by changing its 'src' attribute
                const currentSrc = selectedIframe.src;
                selectedIframe.src = ''; // Remove current src
                selectedIframe.src = currentSrc; // Reset the src to trigger a reload

                // Remove active class from all buttons
                const buttons = document.querySelectorAll('button');
                buttons.forEach(btn => btn.classList.remove('active'));

                // Add active class to the clicked button
                button.classList.add('active');

                // Update the banner text and display it
                const banner = document.getElementById('reportBanner');
                if (reportName === 'chromium') {
                    banner.innerText = 'Showing results for Chromium';
                } else if (reportName === 'firefox') {
                    banner.innerText = 'Showing results for Firefox';
                } else if (reportName === 'webkit') {
                    banner.innerText = 'Showing results for WebKit';
                }
                banner.style.display = 'block'; // Show the banner
            }

            // Set default display state on page load (Chromium selected by default)
            document.querySelector('button.chromium-btn').classList.add('active');
            showReport('chromium', document.querySelector('button.chromium-btn'));
        </script>

    </body>
    </html>
`;

    const combinedReportPath = path.resolve(__dirname, 'reports', 'combined-report.html');

    // Write the combined report to the file system
    fs.writeFileSync(combinedReportPath, combinedReportContent, 'utf8');

    return combinedReportPath;
}

// Create the combined report after individual reports are generated
const combinedReportPath = createCombinedReport();

// Open the combined report in the default browser
open(combinedReportPath);
