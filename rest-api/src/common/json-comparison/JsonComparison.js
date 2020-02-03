import JsonComparisonUtils from './JsonComparisonUtils';

class JsonComparison {
    /**
     *
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     * @param {string=} parentPropertyName
     */
    compareJsonProperties(
        jsonSource,
        jsonDestination,
        parentPropertyName = 'event'
    ) {
        const propertyNameList = Object.getOwnPropertyNames(jsonSource);

        for (const propertyName of propertyNameList) {
            const isObject = jsonSource[propertyName] instanceof Object;
            if (!isObject) {
                JsonComparisonUtils.compareProperty(
                    propertyName,
                    parentPropertyName,
                    jsonSource,
                    jsonDestination
                );
            } else {
                JsonComparisonUtils.verifyJSONDestinationPropertyExisted(
                    propertyName,
                    parentPropertyName,
                    jsonSource,
                    jsonDestination
                );

                this.compareJsonProperties(
                    jsonSource[propertyName],
                    jsonDestination[propertyName],
                    `${parentPropertyName}.${propertyName}`
                );
            }
        }
    }
}

module.exports = new JsonComparison();
