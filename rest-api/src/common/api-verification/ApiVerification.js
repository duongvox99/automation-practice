import ApiVerificationUtils from './ApiVerificationUtils';

class ApiVerification {
    /**
     *
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     */
    verify(
        jsonSource,
        jsonDestination,
    ) {
        const propertyNameList = Object.getOwnPropertyNames(jsonSource);

        for (const propertyName of propertyNameList) {
            const isObject = jsonSource[propertyName] instanceof Object;
            if (!isObject) {
                ApiVerificationUtils.compareProperty(
                    propertyName,
                    jsonSource,
                    jsonDestination
                );
            } else {
                ApiVerificationUtils.verifyDestinationPropertyExisted(
                    propertyName,
                    jsonSource,
                    jsonDestination
                );

                this.verify(
                    jsonSource[propertyName],
                    jsonDestination[propertyName],
                );
            }
        }
    }
}

module.exports = new ApiVerification();
