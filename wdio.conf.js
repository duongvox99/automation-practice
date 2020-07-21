// This environment parameters for on-premise version
process.env.TESTING_HOST = 'http://127.0.0.1';
process.env.APP_NAME = 'cbgrn';
process.env.CGI_DIR = 'cgi-bin';
process.env.GAROON_TYPE = 'cgi';
// process.env.NUMBER_RETRIES = 0;

exports.config = {
    runner: 'local',
    services: ['selenium-standalone'],
    // host: 'localhost',
    // port: 4444,
    //path: '/wd/hub',
    baseUrl: process.env.TESTING_HOST,
    logLevel: 'trace',
    specs: [],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 900000,
        compilers: ['js:@babel/register'],
    },
    sync: true,
    reporters: [
        'spec',
        ['junit', {
            outputDir: './test-report/junit-results/',
        }
        ],
        ['allure', {
            outputDir: './test-report/allure-results/',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }
        ],
    ],
    before: () => {
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.sprintf = require('sprintf-js').sprintf;
        global.vsprintf = require('sprintf-js').vsprintf;
    },
};
