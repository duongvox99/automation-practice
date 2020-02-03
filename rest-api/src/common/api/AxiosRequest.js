const axios = require('axios').default;

/**
 *
 * @param {Object} requestContent
 * @returns {*}
 */
const sendRequest = (requestContent) => {
    return browser.call(function () {
        return axios({
            method: requestContent.httpMethod.toLowerCase(),
            url: requestContent.url,
            headers: requestContent.headers,
            data: requestContent.body
        })
            .then(response => {
                return response;
            })
            .catch(e => {
                if (e.response) {
                    return e.response;}
                else {
                    return e;
                }
            });
    });
};

module.exports = sendRequest;
