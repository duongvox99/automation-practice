import PageNavigator from "../../../../e2e-core/src/shared/pages/PageNavigator";

const queryString = require('querystring');
const logger = require('./Logger');
const sendRequest = require('./AxiosRequest');
const DEFAULT_API_VERSION = 'v1';

export default class AbstractApi {
    /**
     *
     * @param {Object=} credentials
     * @param {string} credentials.username
     * @param {string} credentials.password
     */
    constructor(credentials) {
        this._credentials = credentials;
        this._response = {};

        this.setCredentials(credentials);
    }

    /**
     *
     * @param {Object} credentials
     * @param {string} credentials.username
     * @param {string} credentials.password
     */
    setCredentials(credentials) {
        this._credentials = credentials;
    }

    /**
     * execute a RestApi request
     * @param {Object} requestInfo
     * @param {string} requestInfo.url
     * @param {string} requestInfo.httpMethod
     * @param {Object=} requestInfo.body
     * @param {Object=} requestInfo.headers
     * @returns {AbstractApi}
     */
    execute(requestInfo) {
        this._validateRequestInfo(requestInfo);

        let requestOptions = Object.assign(
            {},
            {
                url: this._getRequestUrl(requestInfo),
                httpMethod: requestInfo.httpMethod,
                headers: this._getHeaders(requestInfo.headers),
                body: this._getBody(requestInfo.body),
                json: true,
            }
        );

        this._logSendingRequest(requestOptions);
        this._response = this._sendRequest(requestOptions);

        if (this._isRequestError()) {
            this._handleError();

            return this;
        }

        this._handleSuccess();

        return this;
    }

    /**
     *
     * @param {Object} requestInfo
     * @private
     */
    _validateRequestInfo(requestInfo) {
        if (typeof requestInfo.url === 'undefined') {
            throw new Error('Request Url is empty.');
        }

        if (typeof requestInfo.httpMethod === 'undefined') {
            throw new Error('Request httpMethod is empty.');
        }
    }

    /**
     *
     * @param {Object} requestInfo
     * @returns {string}
     * @private
     */
    _getRequestUrl(requestInfo) {
        let requestQueryString = '';
        if (requestInfo.parameters && requestInfo.parameters.length > 1) {
            requestQueryString = queryString.stringify(requestInfo.parameters);
        }

        return `${PageNavigator.garoonRootUrl()}/api/${DEFAULT_API_VERSION}/${requestInfo.url}?${requestQueryString}`;
    }

    /**
     *
     * @param {Object=} requestHeaders
     * @private
     */
    _getHeaders(requestHeaders = {}) {
        const userPasswordBase64 = Buffer.from(
            `${this._credentials.username}:${this._credentials.password}`
        ).toString('base64');

        return Object.assign(
            {},
            {
                'X-Cybozu-Authorization': userPasswordBase64,
                accept: '*',
            },
            requestHeaders
        );
    }

    /**
     *
     * @param {Object} requestBody
     * @returns {Object}
     * @private
     */
    _getBody(requestBody) {
        if (typeof requestBody === 'undefined') {
            return {};
        }

        return requestBody;
    }

    /**
     *
     * @param {Object} requestInfo
     * @returns AbstractApi
     * @private
     */
    _logSendingRequest(requestInfo) {
        logger.debug('request.url:', requestInfo.url);
        logger.debug('request.httpMethod:', requestInfo.httpMethod);
        logger.debug('request.headers:', JSON.stringify(requestInfo.headers));
        logger.debug('request.body:', '\n', requestInfo.body);

        return this;
    }

    /**
     *
     * @param {Object} requestInfo
     * @return {Object}
     * @private
     */
    _sendRequest(requestInfo) {
        return sendRequest(requestInfo);
    }

    /**
     *
     * @return {boolean}
     * @private
     */
    _isRequestError() {
        return this._response === undefined || this._response.status === undefined;
    }

    _handleSuccess() {
        logger.debug('response body:', this.getResponse());
    }

    _handleError() {
        const errorMessage = `[Response Error] Error detail: ${JSON.stringify(this._response)}`;

        throw new Error(errorMessage);
    }

    /**
     *
     * @return {Object}
     */
    getResponse() {
        return {
            status: this._response.status,
            data: this._response.data
        };
    }
}
