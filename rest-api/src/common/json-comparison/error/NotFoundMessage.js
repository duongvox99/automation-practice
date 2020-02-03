import IFailedMessage from './IFailedMessage';

class NotFoundMessage extends IFailedMessage {
    constructor() {
        super();
    }

    /**
     *
     * @param {string} propertyName
     * @param {string} parentPropertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     * @return {string}
     */
    generateFailedMessage(
        propertyName,
        parentPropertyName,
        jsonSource,
        jsonDestination
    ) {
        return `FAILED:
            \n The ${parentPropertyName}.${propertyName} property does not existed,\n   expected: ${JSON.stringify(
            jsonSource[propertyName]
        )} \n\n but actual: ${JSON.stringify(jsonDestination[propertyName])}`;
    }
}

module.exports = new NotFoundMessage();
