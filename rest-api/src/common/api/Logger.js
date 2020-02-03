'use strict';

// usage:  off < fatal < error < warn < info < debug < trace < all
// let logger = log4js.getLogger('test_case');
// logger.fatal('Cheese was breeding ground for listeria.');
// logger.error('Cheese is too ripe!');
// logger.warn('Cheese is quite smelly.');
// logger.info('Cheese is Gouda.');
// logger.debug('Got cheese.');
// logger.trace('Entering cheese testing');

const log4js = require('log4js');
const configure = {
    appenders: {
        test_scripts: {
            type: 'file',
            filename: 'test_results.log',
            maxLogSize: 1048576,
            layout: {
                type: 'pattern',
                pattern: '%d{ISO8601_WITH_TZ_OFFSET} (%h:%x{pid}) [%p] - %m',
                tokens: {
                    pid: () => {
                        return process.pid;
                    },
                },
            },
        },
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%r (%x{pid}) [%p] - %m',
                tokens: {
                    pid: () => {
                        return process.pid;
                    },
                },
            },
        },
        stdout: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                pattern: '[%p] - %m',
                tokens: {
                    pid: () => {
                        return process.pid;
                    },
                },
            },
        },
    },
    categories: {
        default: { appenders: ['test_scripts', 'stdout'], level: 'trace' },
    },
};

log4js.configure(configure);
module.exports = log4js.getLogger('test_scripts');
