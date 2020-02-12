'use strict';

process.env.TESTING_HOST = 'http://127.0.0.1';
process.env.APP_NAME = 'cbgrn';
process.env.CGI_DIR = 'cgi-bin';
process.env.GAROON_TYPE = 'cgi';

const merge = require('deepmerge');
const mainConfig = require('../wdio.conf.js');
exports.config = merge(mainConfig.config, {
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                binary: process.env.CHROME_BIN,
                args: ['--headless', '--no-sandbox'],
            },
            maxInstances: 1,
        },
    ],
    specs: ['rest-api/src/**/test-specs/**/*.spec.js'],
    suites: {}
});
