const common = [
    'features/**/*.feature', // Specify feature files
    '--require steps/**/*.js', // Load step definitions
    '--require support/hooks.js', // Load hooks
    '--format progress-bar', // Use progress-bar formatter
    `--format json:./reports/${process.env.BROWSER}-cucumber.json`,
    '--parallel 3'
].join(' ');

module.exports = {
    default: common,
};
