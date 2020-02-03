import ScheduleIndexPage from '../pages/ScheduleIndex.po';
import ScheduleAddPage from '../pages/ScheduleAdd.po';
import ScheduleAddUserSelectPart from '../pages/UserSelect.part';

export default class AddingAppointment {
    /**
     * @constructor
     * @inheritDoc
     * @param {Object} appointmentInfo
     * @param {number} delayEachStep
     */
    constructor(appointmentInfo, delayEachStep = 0) {
        this._appointment = appointmentInfo;
        this._delayEachStep = delayEachStep
    }

    /**
     * @returns {AddingAppointment}
     */
    addRegularAppointment(pauseInMs = 0) {
        this.goToAddAppointmentPage();
        this._fillAppointmentDetail();
        browser.pause(pauseInMs);

        // TODO: click on submit btn
        // ScheduleAddPage.clickOnAddBtn();

        return this;
    }

    /**
     *
     * @param {number} delayEachStep
     * @returns {AddingAppointment}
     * @private
     */
    _fillAppointmentDetail(delayEachStep = this._delayEachStep) {
        let schedulePage = ScheduleAddPage;

        // TODO: in code below, there is one mistake, please find out and fix it
        if (this._appointment.startDay) {
            browser.pause(delayEachStep);
            schedulePage.selectStartDay(this._appointment.startDay);
        }

        if (this._appointment.startMonth) {
            browser.pause(delayEachStep);
            schedulePage.selectStartMonth(this._appointment.startMonth);
        }

        if (this._appointment.startYear) {
            schedulePage.selectStartYear(this._appointment.startYear);
        }

        if (this._appointment.startHour) {
            browser.pause(delayEachStep);
            schedulePage.selectStartHour(this._appointment.startHour);
        }

        if (this._appointment.startMinute) {
            browser.pause(delayEachStep);
            schedulePage.selectStartMinute(this._appointment.startMinute);
        }

        if (this._appointment.endYear) {
            browser.pause(delayEachStep);
            schedulePage.selectEndYear(this._appointment.endYear);
        }

        if (this._appointment.endMonth) {
            browser.pause(delayEachStep);
            schedulePage.selectEndMonth(this._appointment.endMonth);
        }

        if (this._appointment.endDay) {
            browser.pause(delayEachStep);
            schedulePage.selectEndDay(this._appointment.endDay);
        }


        if (this._appointment.endHour) {
            browser.pause(delayEachStep);
            schedulePage.selectEndHour(this._appointment.endHour);
        }

        if (this._appointment.endMinute) {
            schedulePage.selectEndMinute(this._appointment.endMinute);
        }

        if (this._appointment.eventMenu) {
            browser.pause(delayEachStep);
            ScheduleAddPage.selectAppointmentMenu(this._appointment.eventMenu);
        }

        if (this._appointment.subject) {
            browser.pause(delayEachStep);
            schedulePage.inputSubject(this._appointment.subject);
        }

        if (this._appointment.notes) {
            browser.pause(delayEachStep);
            schedulePage.inputNotes(this._appointment.notes);
        }
        return this;
    }

    /**
     * this method is provided for a specific test script
     * @param {string} userName
     * @returns {AddingAppointment}
     */
    selectUserByUserSearch(userName) {
        const userList = [userName];
        ScheduleAddUserSelectPart.setMembers(userList);

        return this;
    }

    /**
     * @returns {AddingAppointment}
     */
    goToAddAppointmentPage() {
        ScheduleIndexPage.openPage().clickOnNewAppointmentLnk();
        return this;
    }

}
