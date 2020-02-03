import AbstractApi from '../../common/api/AbstractApi';

class ScheduleApi extends AbstractApi {
    /**
     *
     * @param {Object} credentials
     */
    constructor(credentials) {
        super(credentials);
    }

    /**
     * @param {Object=} requestParameters
     * @returns {Object}
     */
    getEvents(requestParameters = {}) {
        const requestInfo = {
            url: 'schedule/events',
            httpMethod: 'GET',
            parameters: requestParameters
        };

        return super.execute(requestInfo).getResponse();
    }

    /**
     *
     * @param {int} eventId
     * @returns {Object}
     */
    getEventById(eventId) {
        const requestInfo = {
            url: `schedule/events/${eventId}`,
            httpMethod: 'GET',
        };

        return super.execute(requestInfo).getResponse();
    }

    /**
     *
     * @param {Object} requestBody
     * @returns {Object}
     */
    createEvent(requestBody){
        const requestInfo = {
            url: 'schedule/events',
            httpMethod: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        };

        return super.execute(requestInfo).getResponse();
    }

    /**
     *
     * @param {int} eventId
     * @param {Object} requestBody
     * @returns {Object}
     */
    modifyEvent(eventId, requestBody){
        const requestInfo = {
            url: 'schedule/events',
            httpMethod: 'PATCH',
            body: requestBody
        };

        return super.execute(requestInfo).getResponse();
    }

    /**
     *
     * @param {int} eventId
     * @returns {Object}
     */
    deleteEvent(eventId) {
        const requestInfo = {
            url: `schedule/events/${eventId}`,
            httpMethod: 'DELETE',
        };

        return super.execute(requestInfo).getResponse();
    }
}

module.exports = ScheduleApi;
