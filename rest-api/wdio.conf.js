'use strict';

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
