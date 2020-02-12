'use strict';
// This environment parameters for on-premise version
process.env.TESTING_HOST = 'http://127.0.0.1';
process.env.APP_NAME = 'cbgrn';
process.env.CGI_DIR = 'cgi-bin';
process.env.GAROON_TYPE = 'cgi';;
// process.env.NUMBER_RETRIES = 0;

const merge = require('deepmerge');
const mainConfig = require('../wdio.conf.js');
exports.config = merge(mainConfig.config, {
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--start-maximized', '--no-sandbox'],
        },
        maxInstances: 1,
    },
    ],
    specs: ['acceptance/src/**/test-specs/**/*.spec.js'],
    suites: {
        schedule: ['acceptance/src/schedule/test-specs/**/*.spec.js'],
        // address: ['e2e/address/test-specs/**/*.spec.js'],
        demo: ['acceptance/src/demo/test-specs/**/*.spec.js']
    }
});
