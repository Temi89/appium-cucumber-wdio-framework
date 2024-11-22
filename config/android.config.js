const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

config.capabilities = [{
    platformName: 'Android',
    'appium:deviceName': AndroidInfo.deviceName(),  // Make sure this matches your device
    'appium:platformVersion': AndroidInfo.platFormVersion(),      // Ensure the correct version
    'appium:app': path.resolve(`apps/${AndroidInfo.appName()}`), // Path to your APK file
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'org.wikipedia',
    'appium:appActivity': 'org.wikipedia.main.MainActivity',
}]

config.cucumberOpts.tagExpression = '@androidApp';

exports.config = config;



