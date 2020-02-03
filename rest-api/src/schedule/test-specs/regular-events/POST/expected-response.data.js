import requestData from './requested.data';

const expectedResponse = {
    status: 201,
    data: {
        eventType: requestData.eventType,
        subject: requestData.subject,
        notes: requestData.notes,
        isAllDay: requestData.isAllDay,
        isStartOnly: requestData.isStartOnly,
        attendees: requestData.attendees,
        start: requestData.start,
        end: requestData.end,
        originalStartTimeZone: requestData.originalStartTimeZone,
        originalEndTimeZone: requestData.originalEndTimeZone,
        visibilityType: requestData.visibilityType,
    },
};

export { expectedResponse as default };
