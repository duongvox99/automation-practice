import { deepCompare } from '../ObjectUtils';
import MismatchMessage from './error/MismatchMessage';
import NotFoundMessage from './error/NotFoundMessage';

class ApiVerificationUtils {
    /**
     *
     * @param {string} propertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     */
    compareProperty(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        assert.isTrue(
            deepCompare(
                jsonSource[propertyName],
                jsonDestination[propertyName]
            ),
            MismatchMessage.generateFailedMessage(
                propertyName,
                jsonSource,
                jsonDestination
            )
        );
    }

    /**
     *
     * @param {string} propertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     */
    verifyDestinationPropertyExisted(
        propertyName,
        jsonSource,
        jsonDestination
    ) {
        assert.isTrue(
            typeof jsonDestination[propertyName] !== 'undefined',
            NotFoundMessage.generateFailedMessage(
                propertyName,
                jsonSource,
                jsonDestination
            )
        );
    }
}

module.exports = new ApiVerificationUtils();
