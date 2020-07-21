const GAROON_TYPE_FAST_CGI = 'fast-cgi';
const GAROON_TYPE_CLOUD = 'cloud';
const NUMBER_RETRIES = 0;

class ConfigParser {
    constructor() {
        this._env = process.env;
    }

    /**
     *
     * @returns {boolean}
     */
    isCloud() {
        if (process.env.GAROON_TYPE == null) {
            return true;
        }
        return GAROON_TYPE_CLOUD === process.env.GAROON_TYPE;
    }


    /**
     *
     * @returns {boolean}
     */
    isFastCGI() {
        return GAROON_TYPE_FAST_CGI === this._env.GAROON_TYPE;
    }

    /**
     * Rerun single tests when this tests failed number times
     * note that: On the develop mode the retry feature does not apply
     * @returns {int}
     */
    retryNumber() {
        if (this.isDeletedData()) {
            return 0;
        }
        return this._env.NUMBER_RETRIES || NUMBER_RETRIES;
    }

    /**
     * Specify the process.env.DELETE_TESTCASE_DATA = true of the fist line in the tests/end_to_end/wdio.conf.js
     * at develop environment if we want to delete test-case data after running.
     * @returns {boolean}
     */
    isDeletedData() {
        const firstChar = (this._env.DELETE_TESTCASE_DATA || 'f')[0];
        if (firstChar === 't' || firstChar === '1') {
            return true;
        }
        return false;
    }

}

module.exports = new ConfigParser();
