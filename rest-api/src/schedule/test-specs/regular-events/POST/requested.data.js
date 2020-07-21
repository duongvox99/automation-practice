import RandomDataGenerator from '../../../../../../e2e-core/src/shared/RandomDataGenerator';
import DateTimeUtils from '../../../../common/DateTimeUtils';

const requestedData = {
    eventType: 'REGULAR',
    subject: `Event subject - ${RandomDataGenerator.randomizeString()}`,
    notes: `Event description - ${RandomDataGenerator.randomizeString()}`,
    isAllDay: false,
    isStartOnly: false,
    attendees: [
        {
            type: 'USER',
            name: 'Administrator',
            code: 'Administrator',
        },
    ],
    start: {
        dateTime: DateTimeUtils.createDateTimeIsoStr(),
        timeZone: 'Asia/Tokyo',
    },
    end: {
        dateTime: DateTimeUtils.createDateTimeIsoStr(0, 1),
        timeZone: 'Asia/Tokyo',
    },
    originalStartTimeZone: 'Asia/Tokyo',
    originalEndTimeZone: 'Asia/Tokyo',
    visibilityType: 'PUBLIC',
};

export { requestedData as default };
