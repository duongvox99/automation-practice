import  ConfigParser from "../ConfigParser";

class PageNavigator {
    /**
     * @param {String} path - the path extended counted from baseUrl
     * @see url.resolve()
     * @param {String} parameter - string of parameters on url
     * @example
     * // open the page with url: baseUrl/path
     * openPage(path)
     *
     * // open the page with url: baseUrl/path and parameter
     * openPage(path, parameter)
     * */
    openPage(path, parameter = '') {
        browser.url(this.garoonPageUrl(path, parameter));

        return this;
    }

    garoonRootUrl() {
        if (ConfigParser.isCloud()) {
            return this._garoonCloudRootUrl();
        } else if (ConfigParser.isFastCGI()) {
            return this._garoonFastRootUrl();
        }
        return this._garoonNormalRootUrl();
    }

    rootUrl() {
        if (ConfigParser.isCloud()) {
            return browser.options.baseUrl + '/';
        } else if (ConfigParser.isFastCGI()) {
            return this._garoonFastRootUrl();
        }
        return this._garoonNormalRootUrl();
    }

    garoonPageUrl(path, parameter) {
        if (ConfigParser.isCloud()) {
            return this._garoonCloudPageUrl(path, parameter);
        } else if (ConfigParser.isFastCGI()) {
            return this._garoonFastPageUrl(path, parameter);
        }
        return this._garoonNormalPageUrl(path, parameter);
    }

    openGaroonPage(page, parameter = '') {
        // Forest/Cloud and Large-scale
        if (ConfigParser.isCloud() || ConfigParser.isFastCGI()) {
            if (page.indexOf('?') > -1) {
                page += '.csp';
            } else {
                page = page.replace('?', '.csp?');
            }
        }

        browser.url(this.garoonRootUrl() + page + parameter);

        return this;
    }

    /**
     * Return the root url of Garoon cloud version.
     * e.g: garoon.cybozu-dev.com/g/
     * @returns {string}
     * @private
     */
    _garoonCloudRootUrl() {
        let appName = process.env.APP_NAME;

        if (typeof appName === 'undefined') {
            appName = 'g';
        }

        return browser.options.baseUrl + '/' + appName + '/';
    }

    /**
     * Return the root url of Garoon large scale version.
     * e.g: http://10.192.12.27/grn/index.csp
     * @returns {string}
     * @private
     */
    _garoonFastRootUrl() {
        let appName = process.env.APP_NAME;

        if (typeof appName === 'undefined') {
            appName = 'grn';
        }

        return browser.options.baseUrl + '/' + appName + '/index.csp';
    }

    /**
     * Return the root url of Garoon large scale version.
     * e.g: http://10.192.12.27/cgi-bin/cbgrn/grn.cgi/
     * @returns {string}
     * @private
     */
    _garoonNormalRootUrl() {
        let appName = process.env.APP_NAME;
        const cgiDir = process.env.CGI_DIR || 'scripts';
        let garoonBinary = 'grn.cgi';

        if (typeof appName === 'undefined') {
            appName = 'cbgrn';
        }

        const isGaroonNormalWindowsIIS = cgiDir.indexOf('scripts') > -1;
        if (isGaroonNormalWindowsIIS) {
            garoonBinary = 'grn.exe';
        }
       const result = (
            browser.options.baseUrl +
            '/' +
            cgiDir +
            '/' +
            appName +
            '/' +
            garoonBinary +
            '/'
        );

        return  result;
    }

    /**
     * Return the application page url of Garoon cloud version.
     * e.g: garoon.cybozu-dev.com/g/schedule/index.csp
     * @returns {string}
     * @private
     */
    _garoonCloudPageUrl(path, parameter = '') {
        let appName = browser.options.appName;

        if (typeof appName === 'undefined') {
            appName = 'g';
        }

        return `${browser.options.baseUrl}/${appName}/${path}.csp?${parameter}`;
    }

    /**
     * Return the application page url of Garoon large scale version.
     * e.g: http://10.192.12.27/grn/schedule/index.csp
     * @returns {string}
     * @private
     */
    _garoonFastPageUrl(path, parameter = '') {
        let appName = process.env.APP_NAME;

        if (typeof appName === 'undefined') {
            appName = 'grn';
        }

        return `${browser.options.baseUrl}/${appName}/${path}?${parameter}`;
    }

    /**
     * Return the application page url of Garoon single version.
     * e.g: http://10.192.12.27/cgi-bin/cbgrn/grn.cgi/schedule/index
     * @returns {string}
     * @private
     */
    _garoonNormalPageUrl(path, parameter = '') {
        const rootUrl = this._garoonNormalRootUrl();

        return `${rootUrl}${path}?${parameter}`;
    }
}

module.exports = new PageNavigator();
