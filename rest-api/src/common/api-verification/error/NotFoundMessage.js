import IFailedMessage from './IFailedMessage';

class NotFoundMessage extends IFailedMessage {
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
            \n The ${propertyName} property does not existed,\n   expected: ${JSON.stringify(
            jsonSource[propertyName]
        )} \n\n but actual: ${JSON.stringify(jsonDestination[propertyName])}`;
    }
}

module.exports = new NotFoundMessage();
