import IFailedMessage from './IFailedMessage';

class MismatchMessage extends IFailedMessage {
    constructor() {
        super();
    }

    /**
     *
     * @param {string} propertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     * @return {string}
     */
    generateFailedMessage(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        return `FAILED:
            \n The ${propertyName} property does not match,\n   expected: ${JSON.stringify(
            jsonSource[propertyName]
        )} \n\n but actual: ${JSON.stringify(jsonDestination[propertyName])}\n`;
    }
}

module.exports = new MismatchMessage();
