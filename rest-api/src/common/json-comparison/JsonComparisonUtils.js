import { deepCompare } from '../ObjectUtils';
import MismatchMessage from './error/MismatchMessage';
import NotFoundMessage from './error/NotFoundMessage';

class JsonComparisonUtils {
    /**
     *
     * @param {string} propertyName
     * @param {string} parentPropertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     */
    compareProperty(
        propertyName,
        parentPropertyName,
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
                parentPropertyName,
                jsonSource,
                jsonDestination
            )
        );
    }

    /**
     *
     * @param {string} propertyName
     * @param {string} parentPropertyName
     * @param {Object} jsonSource
     * @param {Object} jsonDestination
     */
    verifyJSONDestinationPropertyExisted(
        propertyName,
        parentPropertyName,
        jsonSource,
        jsonDestination
    ) {
        assert.isTrue(
            typeof jsonDestination[propertyName] !== 'undefined',
            NotFoundMessage.generateFailedMessage(
                propertyName,
                parentPropertyName,
                jsonSource,
                jsonDestination
            )
        );
    }
}

module.exports = new JsonComparisonUtils();
