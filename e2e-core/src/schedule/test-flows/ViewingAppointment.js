import ScheduleViewPage from '../pages/ScheduleView.po';
import StringUtils from '../../shared/StringUtils';

export default class ViewingAppointment {
    /**
     *
     * @param {RegularAppointment} appointment
     */
    constructor(appointment) {
        this._appointment = appointment;
    }

    /**
     *
     * @returns {ViewingAppointment}
     */
    openAppointmentDetails() {
       const isDetailedPage = browser.getUrl().indexOf('schedule/view') > -1;
        if (isDetailedPage) {
            return this;
        }

        // Do something
        // consider keep this method or not

        return this;
    }

    /**
     *
     * @returns {ViewingAppointment}
     */
    verifyAppointmentDetails() {
        let appointmentMenuAndSubject = this._appointment.subject;
        if (this._appointment.eventMenu) {
            appointmentMenuAndSubject = `${this._appointment.eventMenu}${
                this._appointment.subject
                }`;
        }

        // TODO: need to verify appointment subject
        // expect(appointmentMenuAndSubject).to.equal(
        //     ScheduleViewPage.getSubject(),
        //     'FAILED: Subject is incorrect'
        // );

        const expectedDateTime = this._formatDateTimeToAssert();
        expect(expectedDateTime).to.equal(
            ScheduleViewPage.getDateTime(),
            'FAILED: Date and time is incorrect'
        );

        if (this._appointment.notes) {
            expect(this._appointment.notes).to.equal(
                ScheduleViewPage.getNotes(),
                'FAILED: Notes is incorrect'
            );
        }

        return this;
    }


    /**
     * This function uses for preparing date time to assert the expected and viewing value
     * @returns {string}
     * @private
     */
    _formatDateTimeToAssert() {
        let startHour = '';
        let startMinute = '';
        let endHour = '';
        let endMinute = '';

        // format start date and end date
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        };
        const startDate = new Date(
            this._appointment.startYear,
            this._appointment.startMonth - 1,
            this._appointment.startDay
        );
        const formattedStartDate = StringUtils.removeAllSpaces(
            startDate.toLocaleString('en-US', options)
        );

        let formattedEndDate = '';
        const hasEndTime = this._appointment.endYear && this._appointment.endMonth && this._appointment.endDay;
        if (hasEndTime) {
            const endDate = new Date(this._appointment.endYear, this._appointment.endMonth - 1, this._appointment.endDay);
            formattedEndDate = StringUtils.removeAllSpaces(endDate.toLocaleString('en-US', options));
        }

        // format start time and end time
        if (this._appointment.startHour) {
            startHour = ('0' + this._appointment.startHour).slice(-2);
            if (this._appointment.startMinute) {
                startMinute = ('0' + this._appointment.startMinute).slice(-2);
            } else {
                startMinute = '00';
            }
        }
        if (this._appointment.endHour) {
            endHour = ('0' + this._appointment.endHour).slice(-2);
            if (this._appointment.endMinute) {
                endMinute = ('0' + this._appointment.endMinute).slice(-2);
            } else {
                endMinute = '00';
            }
        }

        let datetimeToAssert = formattedStartDate;


        // - case: Regular appointment which is not set start time and end time
        const isNotSpecifiedStartEndTime = startHour === '' && endHour === '' && formattedStartDate !== formattedEndDate;
        if (isNotSpecifiedStartEndTime) {
            datetimeToAssert += '00:00-23:59(Allday)';
            return datetimeToAssert;
        }

        // - case: Regular appointment within start time / end time
        if (startHour !== '') {
            datetimeToAssert = datetimeToAssert + startHour + ':' + startMinute;
            if ((formattedEndDate !== '' && formattedStartDate === formattedEndDate)) {
                if (endHour !== '') {
                    datetimeToAssert = `${datetimeToAssert}-${endHour}:${endMinute}`;
                }
            } else {
                datetimeToAssert = `${datetimeToAssert}${formattedEndDate}-${endHour}:${endMinute}`;
            }
        }

        return datetimeToAssert;
    }


    /**
     * @param {Array} attendees
     * @returns {String[]}
     * @private
     */
    _getAttendeesForCompare(attendees) {
        const attendeeNames = [];
        for (let i = 0; i < attendees.length; i++) {
            let userName;

            if (typeof attendees[i] === 'object') {
                userName = attendees[i].username;
            } else {
                userName = attendees[i];
            }

            attendeeNames.push(userName);
        }

        return attendeeNames;
    }
}
